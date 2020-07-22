import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Functional Component
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //Destructure state
  return (
    <div>
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="User Avatar"
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
