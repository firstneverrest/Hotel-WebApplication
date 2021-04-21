import React, { useEffect, useState } from "react";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiFillHome, AiFillCompass, AiFillHeart, AiFillInfoCircle, AiFillContacts } from "react-icons/ai";
import { RiContactsBook2Fill } from 'react-icons/ri'
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [ClickedPage, setClickedPage] = useState("home");

  const navStyle = {
    textDecoration: "none",
    listStyleType: "none",
    color: "#000",
  };

  return (
    <div className="Sidebar">
      <div className="container">
        <h3 className="Sidebar-logo">
          <Link to="/" style={navStyle}>
            Neverrest
          </Link>
        </h3>
        <ul className="Sidebar__nav">
          <Link to="/" style={navStyle}>
            <li
              className={`Sidebar-home ${ClickedPage === "home" && "active"}`}
              onClick={() => setClickedPage("home")}
            >
              <AiFillHome className="Sidebar__nav-icon" />
              HOME
            </li>
          </Link>
          <Link to="/explore" style={navStyle}>
            <li
              className={`Sidebar-explore ${
                ClickedPage === "explore" && "active"
              }`}
              onClick={() => setClickedPage("explore")}
            >
              <AiFillCompass className="Sidebar__nav-icon" /> 
              EXPLORE
            </li>
          </Link>
          <Link to="/favorite" style={navStyle}>
            <li
              className={`Sidebar-favorite ${
                ClickedPage === "favorite" && "active"
              }`}
              onClick={() => setClickedPage("favorite")}
            >
              <AiFillHeart className="Sidebar__nav-icon" />
              FAVORITE
            </li>
          </Link>
          <Link to="/about" style={navStyle}>
            <li
              className={`Sidebar-about ${ClickedPage === "about" && "active"}`}
              onClick={() => setClickedPage("about")}
            >
              <AiFillInfoCircle className="Sidebar__nav-icon" />
              ABOUT
            </li>
          </Link>
          <Link to="/contact" style={navStyle}>
            <li
              className={`Sidebar-contact ${
                ClickedPage === "contact" && "active"
              }`}
              onClick={() => setClickedPage("contact")}
            >
              <RiContactsBook2Fill className="Sidebar__nav-icon" />
              CONTACT
            </li>
          </Link>
        </ul>
      </div>

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
