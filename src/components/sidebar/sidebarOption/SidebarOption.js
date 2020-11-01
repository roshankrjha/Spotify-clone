import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ title, Icon, playlist }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
