import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import slippers from "../images/ruby-slippers.jpg";

const NotFound = () => (
  <Fragment>
    <h1>Not Found</h1>
    <p>
      I really don't know what you did, but the page you are looking for is not
      here. Tap the shoes below to return home.{" "}
      <Link to="/">
        <img
          src={slippers}
          alt="Ruby Slippers. There's not place like home. Return Home"></img>
      </Link>
    </p>
  </Fragment>
);

export default NotFound;
