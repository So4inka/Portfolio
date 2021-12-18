import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Projects.css";
import Footer from "../components/Footer";

function Projects(props) {
  return (
    <div>
      <Navbar />
      <div className="projects">
        <div className="projects-text-container">
          <h1 className="projects-subtitle">Projects</h1>
          <h2 className="projects-text">
            Click on a project below to see details
          </h2>
        </div>

        <div>
          {props.listItems && (
            <div className="mainscreen-container">
              {props.listItems.map((item) => (
                <Link
                  className="portfolio-link"
                  to={`/project/${item.id}`}
                >
                  <div
                    className="mainscreen-images"
                    style={{
                      backgroundImage: `url(${item.fields.mainscreen})`,
                    }}
                  >
                    <div className="mainscreen-text-container">
                      <p className="mainscreen-text">{item.fields.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
