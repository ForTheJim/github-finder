import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import './App.css';

class App extends Component {

  // Call this with this.functionOfClass
  //  functionOfClass =()=> 'Fnction of Class, call with this.functionName';

  //lifecycle method
  render(){

    return (
      <>
        <Navbar></Navbar>
        </>
    );
  }

}

export default App;
