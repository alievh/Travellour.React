import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";

const SidebarItem: React.FC<{
  innerText?: string;
  iconClass: string;
  url: string;
}> = (props) => {
  const isSidebarActive = useSelector<RootState, boolean>(
    (state) => state.sidebarToggle.isActive
  );

  return (
    <li>
      <Link to={props.url}>
        <i className={props.iconClass}></i>
        {isSidebarActive && <span>{props.innerText}</span>}
      </Link>
    </li>
  );
};

export default SidebarItem;
