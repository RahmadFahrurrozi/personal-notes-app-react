import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Notification from "./Notification";
import Avatar from "./Avatar";
import NavbarLogo from "./NavbarLogo";
import "../../style/style-navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavbarLogo />
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <Notification />
          <Avatar />
        </div>
        <div className="navbar-burger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
