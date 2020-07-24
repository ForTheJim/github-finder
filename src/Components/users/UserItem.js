import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Functional Component
const UserItem = ({ user: { login, avatar_url } }) => {
  //Destructure state
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 m-2">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
        <img src={avatar_url} alt="User Avatar" className="w-full" />
        <h3 className="font-bold text-xl mb-2 m-2">{login}</h3>
        <Link
          to={`/user/${login}`}
          className="float-right inline-block hover:text-white bg-white text-indigo-900 hover:font-bold hover:shadow-md hover:bg-indigo-900 border border-indigo-700 rounded-full px-3 py-1 m-3 text-sm font-semibold mr-2">
          More <i class="fas fa-arrow-alt-circle-right"></i>
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
