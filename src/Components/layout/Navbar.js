import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar w-full bg-indigo-700">
      <Link
        to="/"
        alt="Home"
        className="text-gray-200 p-3 block text-center md:text-left text-3xl md:text-lg">
        <i className={icon}> </i> {title}
      </Link>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
