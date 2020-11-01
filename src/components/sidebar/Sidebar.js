import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import SidebarOption from "./sidebarOption/SidebarOption";
import { UseDataLayerValue } from "../../Datalayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = UseDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="sidebar-logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar_playlist">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist, index) => {
        return <SidebarOption key={index} title={playlist.name} />;
      })}
    </div>
  );
};

export default Sidebar;
