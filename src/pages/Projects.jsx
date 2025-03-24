import React, { useState } from 'react';
import '../components/projects.css'; // Import the CSS file

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Catch The Spy',
      description: 'A website showcasing my skills and projects.',
      imageUrl: 'portfolio-image.jpg',
      tags: ['React', 'JavaScript', 'CSS'],
      link: 'https://luqmanmahmoodbutt.github.io/catch-the-spy/',
    },
    {
      id: 2,
      title: 'TOO-DO-APP',
      description: 'A simple app for managing tasks with CRUD functionality.',
      imageUrl: 'task-manager-image.jpg',
      tags: ['React', 'LocalStorage'],
      link: 'https://list-too-do.netlify.app/',
    },
    {
      id: 3,
      title: 'Weather Application',
      description: 'Displays current weather using an external API.',
      imageUrl: 'weather-app-image.jpg',
      tags: ['React', 'API', 'CSS'],
    },
    {
      id: 4,
      title: "E-Commerce Mockup",
      description: "A front end mockup of an e-commerce website.",
      imageUrl: "e-commerce-image.jpg",
      tags: ["React", "CSS", "JavaScript"]
    }
  ]);

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-intro">
        Welcome! Here, you'll find a selection of projects I've worked on. Each project demonstrates different skills and technologies.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* <img src={project.imageUrl} alt={project.title} className="project-image" /> */}
            <h3 className="project-title-card"> {project.link && <a href={project.link} target="_blank">{project.title}</a>}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
      
      <p className="projects-contact">
        Feel free to explore each project. If you have any questions or want to learn more, please don't hesitate to contact me.
      </p>
    </div>
  );
};

export default Projects;