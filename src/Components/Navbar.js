import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Menu from "./dropdown.js";

const styles = {
  villan: {
    // backgroundColor: "rgb(52, 161, 244)",
    color: "black"
  },
  navLink: {
    color: "black"
  }
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-animate" style={styles.villan}>
      <Link to="/" className="navbar-brand" style={styles.navLink}>
        Wedding Website
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Menu item1="about the couple" item2="bridal party" />
          </li>
          <li className="nav-item">
            <Link
              to="/RSVP"
              className={
                window.location.pathname === "/RSVP"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={styles.navLink}
            >
              RSVP
            </Link>
          </li>
          <li className="nav-item">
            <Menu item1="accomodations" item2="directions" />
          </li>
          <li className="nav-item">
            <Link
              to="/registry"
              className={
                window.location.pathname === "/registry"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={styles.navLink}
            >
              Registry
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
