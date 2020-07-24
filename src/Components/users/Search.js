import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };
  return (
    <div>
      <form className="form md:flex" onSubmit={onSubmit}>
        <input
          className="bg-white  md:text-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg p-3 m-3 w-11/12 text-lg"
          type="text"
          name="text"
          placeholder="Find User"
          value={text}
          onChange={onChange}></input>
        <button
          type="submit"
          value="Search"
          className="hover:bg-indigo-500 bg-transparent block rounded p-3 font-semibold text-2xl  md:text-lg m-3 hover:text-gray-200 text-indigo-700 border border-indigo-700 w-11/12 md:w-5/12">
          Search
        </button>
        {githubContext.users.length > 0 && (
          <button
            className="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded block p-3 m-3 w-11/12 md:w-5/12 "
            onClick={githubContext.clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
