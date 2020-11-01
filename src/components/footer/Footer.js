import React from "react";
import { useEffect } from "react";
import "./Footer.css";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

import { UseDataLayerValue } from "../../Datalayer";

const Footer = ({ spotify }) => {
  const [{ item, playing }, dispatch] = UseDataLayerValue();

  useEffect(() => {
    spotify
      .getMyCurrentPlaybackState()
      .then((r) => {
        dispatch({
          type: "SET_PLAYING",
          playing: r.is_playing
        });

        dispatch({
          type: "SET_ITEM",
          item: r.item
        });
      })
      .catch((err) => console.log(err));
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify
      .getMyCurrentPlayingTrack()
      .then((r) => {
        dispatch({
          type: "SET_ITEM",
          item: r.item
        });
        dispatch({
          type: "SET_PLAYING",
          playing: true
        });
      })
      .catch((err) => console.log(err));
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify
      .getMyCurrentPlayingTrack()
      .then((r) => {
        console.log(r);
        dispatch({
          type: "SET_ITEM",
          item: r.item
        });
        dispatch({
          type: "SET_PLAYING",
          playing: true
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <img
            className="footer-logo"
            src={item?.album.images[0].url}
            alt={item?.name}
          />
          {item ? (
            <div className="album-info">
              <h4>{item?.name}</h4>
              <p>{item?.artists.map((artist) => artist.name).join(",")}</p>
            </div>
          ) : (
            <div className="album-info">
              <h4>No Song is Playing</h4>
              <p>...</p>
            </div>
          )}
        </div>
        <div className="footer-center">
          <ShuffleIcon className="footer-green" />
          <SkipPreviousIcon className="footer-icon" onClick={skipNext} />
          {playing ? (
            <PlayCircleOutlineIcon
              className="large"
              onClick={handlePlayPause}
            />
          ) : (
            <PlayCircleOutlineIcon
              className="large"
              onClick={handlePlayPause}
            />
          )}
          <SkipNextIcon className="footer-icon" onClick={skipPrevious} />
          <RepeatIcon className="footer-green" />
        </div>
        <div className="footer-right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </Grid>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
