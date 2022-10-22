import React from "react";
import "../../styles/components/NavbarComp.css";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <ul className="menu-navbar">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/post">Post</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;