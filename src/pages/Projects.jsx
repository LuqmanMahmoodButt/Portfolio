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
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'A simple app for managing tasks with CRUD functionality.',
      imageUrl: 'task-manager-image.jpg', // Replace with your image
      tags: ['React', 'LocalStorage'],
    },
    {
      id: 3,
      title: 'Weather Application',
      description: 'Displays current weather using an external API.',
      imageUrl: 'weather-app-image.jpg', // Replace with your image
      tags: ['React', 'API', 'CSS'],
    },
    {
      id: 4,
      title: "E-Commerce Mockup",
      description: "A front end mockup of an e-commerce website.",
      imageUrl: "e-commerce-image.jpg", //Replace with your image.
      tags: ["React", "CSS", "Javascript"]
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
            <h3 className="project-title-card">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tags">
            </p>
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