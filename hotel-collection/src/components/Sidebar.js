import React from "react";

import App from "../App";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navStyle = {
    textDecoration: "none",
    listStyleType: "none",
    color: "#000",
  };

  return (
    <div className="Sidebar">
      <ul className="Sidebar__nav">
        <Link to="/" style={navStyle}>
          <li className="Sidebar-logo">Neverrest</li>
        </Link>
        <Link to="/" style={navStyle}>
          <li className="Sidebar-home">HOME</li>
        </Link>
        <Link to="/explore" style={navStyle}>
          <li className="Sidebar-explore">EXPLORE</li>
        </Link>
        <Link to="/favorite" style={navStyle}>
          <li className="Sidebar-favorite">FAVORITE</li>
        </Link>
        <Link to="/about" style={navStyle}>
          <li className="Sidebar-author">ABOUT</li>
        </Link>
        <Link to="/contact" style={navStyle}>
          <li className="Sidebar-contact">CONTACT</li>
        </Link>
      </ul>

      <div className="Sidebar__social">
        <a className="Sidebar__social-ig" href="#">
          <FaFacebookF />
        </a>
        <a className="Sidebar__social-tweeter" href="#">
          <FaTwitter />
        </a>
        <a className="Sidebar__social-facebook" href="#">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
