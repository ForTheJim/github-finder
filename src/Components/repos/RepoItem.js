import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="bg-white hover:bg-indigo-700 hover:text-white text-indigo-900 font-bold py-2 px-4 rounded inline-flex items-center m-3 border border-indigo-900">
      <h3 className="text-2xl">
        <i class="fas fa-code-branch"></i>{" "}
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
