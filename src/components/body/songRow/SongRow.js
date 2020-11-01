import React from "react";
import "./SongRow.css";

const SongRow = ({ track, playSong }) => {
  return (
    <div className="songrow" onClick={() => playSong(track.id)}>
      <img className="songrow-album" src={track.album.images[0]?.url} alt="" />
      <div className="songrow-info">
        <h2>{track.name}</h2>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
