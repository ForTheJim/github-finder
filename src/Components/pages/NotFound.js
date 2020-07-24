import React from "react";
import { Link } from "react-router-dom";
import slippers from "../images/ruby-slippers.jpg";

const NotFound = () => (
  <div className="w-full overflow-hidden md:mx-24 md:mt-12 p-3">
    <h1 className="font-semibold text-xl">Not Found</h1>
    <p className="text-base py-6">
      I really don't know what you did, but the page you are looking for is not
      here. Tap the shoes below to return home.{" "}
    </p>
    <Link to="/">
      <img
        src={slippers}
        alt="Ruby Slippers. There's not place like home. Return Home"></img>
    </Link>
  </div>
);

export default NotFound;
