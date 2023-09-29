import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <a href="https://cdnlogo.com/logo/tinder_40831.html">
        <img
          className="header__logo"
          src="https://www.cdnlogo.com/logos/t/29/tinder.svg"
          alt="nothing"
        />
      </a>

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
