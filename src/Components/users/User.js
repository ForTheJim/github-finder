import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, getUser, loading, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <Fragment>
        <Link
          to="/"
          className="hover:bg-indigo-500 bg-transparent block rounded p-3 font-semibold text-2xl  md:text-lg m-3 hover:text-gray-200 text-indigo-700 w-11/12 md:w-2/12">
          <i class="fas fa-arrow-alt-circle-left"></i> Back to Search
        </Link>
        <div className="max-w-xl rounded overflow-hidden shadow-lg flex w-full mx-auto flex-col md:flex-row px-2">
          <div className="text-center sm:w-full md:w-6/12">
            <img
              src={avatar_url}
              className="rounded-full h-15 w-15 flex items-center justify-center border-4 border-indigo-900"
              alt="User"
            />
            <h1 className="font-semibold text-2xl">{name}</h1>
            <p className="text-lg">Location: {location}</p>
            Available for Work:{" "}
            {hireable ? (
              <i className="fas fa-check text-green-700" />
            ) : (
              <i className="fas fa-times-circle text-red-700" />
            )}
          </div>
          <div className="bg-indigo-700 text-white p-3 ml-3 sm:w-full md:w-6/12">
            {bio && (
              <Fragment>
                <h3 className="font-bold text-2xl">Bio</h3>
                <p className="base-text">{bio}</p>
              </Fragment>
            )}
            <ul>
              <li>
                {login && (
                  <>
                    <span className="font-bold text-base">Username: </span>{" "}
                    {login}
                  </>
                )}
              </li>
              <li>
                {company && (
                  <>
                    <span className="font-bold text-base">Company: </span>{" "}
                    {company}
                  </>
                )}
              </li>
              <li>
                {login && (
                  <>
                    <span className="font-bold text-base">Website: </span>{" "}
                    <a href={blog}>{blog}</a>
                  </>
                )}
              </li>
            </ul>
            <a
              href={html_url}
              className="bg-white hover:bg-gray-300 hover:text-indigo-900 text-indigo-700 font-bold py-2 px-4 my-3 rounded-full inline-block">
              <i class="fab fa-github" aria-hidden="true"></i>
              {"  "}
              Visit Github Profile
            </a>
          </div>
        </div>
        <div class="text-center">
          <badge className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2 shadow-sm border-gray-400 border">
            {followers} Followers
          </badge>
          <badge className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 shadow-sm border-gray-400 border">
            Following: {following}
          </badge>
          <badge className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 shadow-sm border-gray-400 border">
            Public Repos: {public_repos}
          </badge>
          <badge className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 shadow-sm border-gray-400 border">
            Public Gists: {public_gists}
          </badge>
        </div>
        <div className="p-3">
          <h2 className="text-2xl font-bold">Repositories for {name}</h2>
          <Repos repos={repos} />
        </div>
      </Fragment>
    );
  }
};

export default User;
