import React from "react";
import Navigation from "../components/Navigation";
import FakeText from "./FakeText";

const Akwaba = () => {
  return (
    <div>
      <Navigation />
      <h1> This is Akwaba page </h1>
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            {" "}
            <FakeText />
          </div>
          <div class="col-sm-4">
            <FakeText />
          </div>
        </div>
        <div class="row">
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
        </div>
      </div>
    </div>
  );
};

export default Akwaba;
