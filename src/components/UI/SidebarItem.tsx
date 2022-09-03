import React from "react";
import { useSelector } from "react-redux";

const SidebarItem: React.FC<{ innerText: string, iconClass: string }> = (props) => {
  const isSidebarActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  return <li><a href="#"><i className={props.iconClass}></i>{isSidebarActive && <span>{props.innerText}</span>}</a></li>;
};

export default SidebarItem;
