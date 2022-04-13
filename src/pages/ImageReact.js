import React from "react";
import { Button } from "react-bootstrap";
import Navigation from "../components/Navigation";
import FakeText from "./FakeText";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function ImageReact() {
  return (
    <div>
      <Navigation />

      <h1> This is a page Image </h1>
      <FakeText />
      <Button
        onClick={() => {
          alert("Bienvenue");
        }}
      >
        {" "}
        Click Here{" "}
      </Button>
    </div>
  );
}

export default ImageReact;
