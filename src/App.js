import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Akwaba from "./pages/Akwaba";
import "./App.css";
import ImageReact from "./pages/ImageReact";
import Errorpage from "./pages/Errorpage";
import User from "./components/User";

import NavBar from "./components/NavBar";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />

        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/Image" element={<ImageReact />} />
          <Route path="/Bienvenue" element={<Akwaba />} />
          <Route path="/User" element={<User />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
