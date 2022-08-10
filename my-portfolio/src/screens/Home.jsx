import React from 'react';
import "./Home.css";
import Navbar from '../components/Navbar';

function Home(props) {
  return (
    <div>
      <header id="header">
      <Navbar />
        <div className="homepage-title">
          <h1 id="greeting">Hello, 👋 I am</h1>
          <bd/>
          <h1 id="homepage-title">Nadiya Kallaur</h1>
          <h2 id="homepage-subtitle">SOFTWARE ENGINEER</h2>
        </div>
        <div className="explore-container">
        </div>
      </header>
    </div>
  );
}

export default Home;
