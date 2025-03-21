import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Hi, I'm [Your Name]</h1>
          <p>A frontend developer passionate about creating clean, user-friendly websites and applications.</p>
          <div>
            <Link to="/projects" className="btn">View My Work</Link>
            <Link to="/contact" className="btn secondary">Contact Me</Link>
          </div>
        </div>
      </section>
      
      <section className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <img src="https://via.placeholder.com/300x200" alt="Project" />
              <div className="project-content">
                <h3>Project One</h3>
                <p>A brief description of this project and what technologies were used.</p>
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">CSS</span>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <img src="https://via.placeholder.com/300x200" alt="Project" />
              <div className="project-content">
                <h3>Project Two</h3>
                <p>A brief description of this project and what technologies were used.</p>
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link to="./projects" className="btn">View All Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
