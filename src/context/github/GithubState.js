// Initial State and houses actions

import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    // this.setState({ users: response.data.items, loading: false });
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };
  // Get User
  const getUser = async (username) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    console.log(response.data);
    // this.setState({ user: response.data, loading: false });
    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  };

  // Get Repos
  const getUserRepos = async (username) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log("THIS IS THE DATA " + response.data);

    dispatch({
      type: GET_REPOS,
      payload: response.data,
    });
  };

  // Clear Users
  const clearUsers = () => {
    // this.setState({ users: [], loading: false });
    dispatch({
      type: CLEAR_USERS,
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
