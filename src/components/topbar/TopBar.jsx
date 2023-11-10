import React from "react";
import "./topbar.css";
import { Notifications, Search, ArrowDropDown } from "@mui/icons-material";
import SideNav from "../sidnav/SideNav";

export default function TopBar({ randomise }) {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <SideNav />
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input type="text" className="searchInput" />
        </div>
        <div className="topBarcenterButton">
          <button onClick={randomise} className="button">
            Randomize
          </button>
        </div>
      </div>

      <div className="topbarRight">
        <div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topbarIconBadge"></span>
          </div>
        </div>
        <div className="profileContainer">
          <img
            src="/assets/ramesh.jpeg"
            alt="profile pic"
            className="topbarImage"
          />
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
}
