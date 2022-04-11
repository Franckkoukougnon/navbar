import React from "react";
import Navigation from "../components/Navigation";
import FakeText from "./FakeText";

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>This is Home page </h1>
      <FakeText />
    </div>
  );
};

export default Home;
