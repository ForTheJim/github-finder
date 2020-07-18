import React, { Component } from "react";
import Navbar from "./Components/layout/Navbar";
import Users from "./Components/users/Users";
import axios from "axios";
import Search from "./Components/users/Search";
import "./App.css";

class App extends Component {
  // Call this with this.functionOfClass
  //  functionOfClass =()=> 'Fnction of Class, call with this.functionName';
  state = {
    users: [],
    loading: false,
  };
  // lifecycle method
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const response = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({ users: response.data, loading: false });
  // }
  // Search Github Users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ users: response.data.items, loading: false });
  };

  //lifecycle method
  render() {
    return (
      <>
        <Navbar></Navbar>
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users}></Users>
        </div>
      </>
    );
  }
}

export default App;
