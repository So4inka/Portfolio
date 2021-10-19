import React from 'react';
import Navbar from '../components/Navbar';
import './AboutMe.css';
import Footer from '../components/Footer';

function AboutMe(props) {
  return (
    <div >
      <Navbar />
      <div className="about-me">
        <h2 className='proj-name'>About Me</h2>

        <div className='about-me-container'>
          <section className="about-column about-column-a">
            <img alt='' className='profile-pic' src="https://i.imgur.com/6aBXEQG.jpg" />
          </section>
          <section className="about-me">
            <p id='aboutme-text'>Hello, I am Nadia. I am a Junior Developer.
              I'm passionate about creating beautiful work combining front end and back end.
              I have an experience to work by myself
              as well with a group on projects that showcased my experience. I am excited and eager to
              contribute and also learn in tech inductry.
            
            </p>

            <div className='details-button-container'>
              <a className='details-button-containers resume-button' rel="noreferrer" target="_blank" href='file:///Users/nadezdakallaur/Downloads/_Resume%20of%20Nadezda%20Kallaur_10_21.pdf'>RESUME</a>
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