import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SidebarItem: React.FC<{ innerText?: string, iconClass: string, url: string }> = (props) => {
  const isSidebarActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return <li><Link to={props.url}><i className={props.iconClass}></i>{isSidebarActive && props.innerText}</Link></li>;
};

export default SidebarItem;
