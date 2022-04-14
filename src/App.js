import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Akwaba from "./pages/Akwaba";
import "./App.css";
import ImageReact from "./pages/ImageReact";
import Errorpage from "./pages/Errorpage";
import User from "./components/User";

const App = () => {
  return (
    <div class="container">
      <Router>
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
