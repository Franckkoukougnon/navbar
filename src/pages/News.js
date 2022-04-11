import React from "react";
import Navigation from "../components/Navigation";
import FakeText from "./FakeText";

const News = () => {
  return (
    <div>
      <Navigation />
      <h1> This is a News Page</h1>
      <FakeText />
    </div>
  );
};

export default News;
