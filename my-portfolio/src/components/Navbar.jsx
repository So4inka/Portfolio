import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(props) {
  return (
    <div className="navbar">
      <Link className="nav navend" to="/"><p>Home</p></Link>
      <Link className="nav" to="/projects"><p>Projects</p></Link>
      <Link className="nav" to="/about-me"><p>About</p></Link>
      <Link className="nav navend" to="/contact"><p>Contact</p></Link>
    </div>
  );
}

export default Navbar;