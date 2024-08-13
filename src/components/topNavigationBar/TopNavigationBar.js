import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const TopNavigationBar = () => {
  return (
    <header>
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Navigation Bar
        </NavLink>

        <div id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/news" className="nav__link">
                News
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about-us" className="nav__link">
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/favorite" className="nav__link">
                Favorite
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/location" className="nav__link">
                Location
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/get-started" className="nav__link nav__cta">
                Get Started
              </NavLink>
            </li>
          </ul>
          {/* <div className="nav__close" id="nav-close">
            <IoClose />
          </div> */}
        </div>

        {/* <div className="nav__toggle" id="nav-toggle">
          <IoMenu />
        </div> */}
      </nav>
    </header>
  );
};

export default TopNavigationBar;
