import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce website with shopping cart functionality.',
      imageUrl: 'https://via.placeholder.com/300x200',
      tags: ['React', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'Portfolio Template',
      description: 'A clean, minimalist portfolio template for developers.',
      imageUrl: 'https://via.placeholder.com/300x200',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A weather application that fetches data from an API.',
      imageUrl: 'https://via.placeholder.com/300x200',
      tags: ['React', 'API', 'CSS']
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A simple task management application with CRUD operations.',
      imageUrl: 'https://via.placeholder.com/300x200',
      tags: ['React', 'JavaScript', 'LocalStorage']
    }
  ];

  return (
    <section className="projects" style={{ paddingTop: '100px' }}>
      <div className="container">
        <h1 className="section-title">My Projects</h1>
      </div>
    </section>
  );
};

export default Projects;
