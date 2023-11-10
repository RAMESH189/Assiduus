import {
  Sidebar,
  Menu,
  MenuItem,
  //useProSidebar
} from "react-pro-sidebar";
import "./sidenav.css";
import React, { useState } from "react";
import {
  Contacts,
  Dashboard,
  AccountBalanceWallet,
  AttachMoney,
  Person,
  Description,
} from "@mui/icons-material";
import { FiChevronsLeft } from "react-icons/fi/";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function SideNav() {
  const [collapsed, setCollapsed] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className="sideNav">
      <Sidebar
        className={`app ${toggled ? "toggled" : ""}`}
        style={{
          height: "100vh",
          position: "fixed",
          top: "0",
          background: "white",
        }}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <main style={{ background: "white", height: "100%", margin: "0" }}>
          <Menu>
            {collapsed ? (
              <MenuItem
                icon={<MenuIcon />}
                onClick={handleCollapsedChange}
              ></MenuItem>
            ) : (
              <MenuItem
                style={{ background: "white" }}
                suffix={<FiChevronsLeft />}
                onClick={handleCollapsedChange}
              >
                <div>
                  <img
                    src="/assets/assiduuslogo.png"
                    alt="logo"
                    className="sidNavImg"
                  />
                </div>
              </MenuItem>
            )}
            <br />
          </Menu>

          <Menu style={{ marginTop: "20px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem icon={<Dashboard />}>Dashboard</MenuItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem icon={<AccountBalanceWallet />}>Accounts </MenuItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem icon={<AttachMoney />}>Payroll</MenuItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem icon={<Description />}>Reports</MenuItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem icon={<Person />}>Advisor</MenuItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem icon={<Contacts />}>Contacts</MenuItem>
            </Link>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
