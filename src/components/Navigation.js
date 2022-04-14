import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Acceuil</li>
        </NavLink>
        <NavLink to="/Image">
          <li>Image</li>
        </NavLink>
        <NavLink to="/News">
          <li>News</li>
        </NavLink>
        <NavLink to="/Bienvenue">
          <li>Actualité</li>
        </NavLink>
        <NavLink to="/User">
          <li>Profil</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
