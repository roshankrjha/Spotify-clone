import React, { useEffect } from "react";
import { getToken } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import "./styles.css";

//Different Components
import Login from "./components/Login";
import Player from "./components/Player";
import { UseDataLayerValue } from "./Datalayer";

const s = new SpotifyWebApi();

export default function App() {
  const [{ token }, dispatch] = UseDataLayerValue();
  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const token = hash.access_token;

    if (token) {
      s.setAccessToken(token);
      //set token for use authentication
      dispatch({
        type: "SET_TOKEN",
        token: token
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s
      });

      //setting up the user
      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });

      s.getPlaylist("37i9dQZEVXbMDoHDwVN2tF").then((albums) => {
        dispatch({
          type: "SET_TOPLIST",
          toplist: albums
        });
      });
    }
  }, []);

  return (
    <div className="app">{token ? <Player spotify={s} /> : <Login />}</div>
  );
}
