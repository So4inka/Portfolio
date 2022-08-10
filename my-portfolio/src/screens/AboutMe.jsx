import React from "react";
import Navbar from "../components/Navbar";
import "./AboutMe.css";
import Footer from "../components/Footer";

function AboutMe(props) {
  return (
    <div>
      <Navbar />
      <div className="about-me">
        <h2 className="about-name">About Me</h2>

        <div className="about-me-container">
          <section className="about-column">
            <img
              alt=""
              className="profile-pic"
              src="https://i.imgur.com/QrrZ7FK.jpg"
            />
          </section>
          <section className="about-me">
            <p id="aboutme-text">
              Hello, I am Nadiya. I am detail-oriented Software Engineer.
              My technical skills include JavaScript, Ruby on rails, React, jQuery, Node, Express, MongoDB, HTML, CSS, Bootstrap, Material UI, APIs, etc.
              <br/>
                   I'm passionate about
              creating beautiful work combining front end and back end. 
            </p>

            <div className="details-button-container">
              <a
                className="details-button-containers resume-button"
                rel="noreferrer"
                target="_blank"
                href="https://docs.google.com/document/d/19z_0NvOQgsBWC0xRgv5CwQdndtQXQWemeFS_pJVsr2I/edit#heading=h.5idyb81x68u1"
              >
                RESUME
              </a>
              <br></br>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
