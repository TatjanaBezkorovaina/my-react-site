import React from "react";
import "./navbar.scss";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../../pages/about-me/About";
import Projects from "../../pages/projects/Projects";
import MainWrapper from "../../pages/main/Main.wrapper";
import { Icon } from "@iconify/react";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <>
      <Router>
        {/* Navigation */}

        <div className="navigation">
          <Link to="/" className="navigation__item">
            <Icon icon="akar-icons:home" />
          </Link>
          <br />
          <Link to="/About" className="navigation__item">
            About Me
          </Link>
          <br />
          <Link to="/Projects" className="navigation__item">
            Projects
          </Link>
          <br />
          <Button />
        </div>
        {/* Content */}
        <Routes>
          {/* Main */}
          <Route path="/" element={<MainWrapper />} />
          {/* About me */}
          <Route path="About" element={<About />} />
          {/* Projects */}
          <Route path="Projects" element={<Projects />} />

          <Route />
        </Routes>
      </Router>
    </>
  );
};

export default Navbar;
