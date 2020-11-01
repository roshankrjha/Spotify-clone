import React from "react";
import { UseDataLayerValue } from "../../Datalayer";
import "./Body.css";

import Header from "./header/Header";
import SongRow from "./songRow/SongRow";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Body = ({ spotify }) => {
  const [{ toplist }, dispatch] = UseDataLayerValue();

  const playList = () => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXbMDoHDwVN2tF`
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true
          });
        });
      })
      .catch((err) => console.log(err));
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:tracks:${id}`]
      })
      .then((res) => {
        console.log(res);
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true
          });
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body-info">
        <img src={toplist?.images[0]?.url} alt="top-songs" />
        <div className="body-infotext">
          <strong>PLAYLISTS</strong>
          <h2>{toplist?.name}</h2>
          <p>{toplist?.description}</p>
        </div>
      </div>

      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle" onClick={playList} />
          <FavoriteIcon className="body-large" />
          <MoreHorizIcon className="more" />
        </div>

        {toplist?.tracks.items.map((item, index) => {
          return <SongRow key={index} track={item.track} playSong={playSong} />;
        })}
      </div>
    </div>
  );
};

export default Body;
