import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  AiFillHome,
  AiFillCompass,
  AiFillHeart,
  AiFillInfoCircle,
  AiFillContacts,
} from "react-icons/ai";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="container">
        <NavLink to="/home" style={{ textDecoration: "none" }}>
          <h3 className="Sidebar-logo">Neverrest</h3>
        </NavLink>
        <ul className="Sidebar__nav">
          <NavLink to="/home" activeClassName="Sidebar__nav-active">
            <li>
              <AiFillHome className="Sidebar__nav-icon" />
              <p>Home</p>
            </li>
          </NavLink>
          <NavLink to="/explore" activeClassName="Sidebar__nav-active">
            <li>
              <AiFillCompass className="Sidebar__nav-icon" />
              <p>Explore</p>
            </li>
          </NavLink>
          <NavLink to="/favorite" activeClassName="Sidebar__nav-active">
            <li>
              <AiFillHeart className="Sidebar__nav-icon" />
              <p>Favorite</p>
            </li>
          </NavLink>
          <NavLink to="/contact" activeClassName="Sidebar__nav-active">
            <li>
              <AiFillInfoCircle className="Sidebar__nav-icon" />
              <p>Contact</p>
            </li>
          </NavLink>
          <NavLink to="/about" activeClassName="Sidebar__nav-active">
            <li>
              <AiFillContacts className="Sidebar__nav-icon" />
              <p>About</p>
            </li>
          </NavLink>
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
