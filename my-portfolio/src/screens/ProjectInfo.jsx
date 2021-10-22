import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectInfo.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ProjectInfo(props) {
  const { id }= useParams()
  const project = props.listItems.find((project) => project.id === id);
  return !project ? (
  <h1>Loading...</h1>
) : (
    <div>
      <Navbar />

      <div className='project-details'>

        <h2 className='project-name'>{project && project.fields.name}</h2>

        <div className='project-details-container'>
          <section className="column column-a">
            <h3 className='subtext'>MOBILE VIEW</h3>
            <a rel="noreferrer" target="_blank" href={project && project.fields.website}><img id='mobile-pic' alt="mobile-view" src={project && project.fields.mobilepic} /></a>
          </section>
          <section className="column column-b">
            <h3 className='subtext'>DESCRIPTION</h3>
            <p className='text'>{project && project.fields.description}</p>
            <h3 className='subtext'>BUILT WITH</h3>
            <p className='text'>{project && project.fields.languages}</p>
            <div className='details-button-container'>
            <a className='details-button-containers' rel="noreferrer" target="_blank" href={project && project.fields.github}>SEE CODE <img id='github' src="https://i.imgur.com/JMMrIY8.png" alt="github"/></a>
            <a className='details-button-containers' rel="noreferrer" target="_blank" href={project && project.fields.website}>VISIT WEBSITE <img id='external-link' alt="website" /></a> 
            </div>
            
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectInfo;