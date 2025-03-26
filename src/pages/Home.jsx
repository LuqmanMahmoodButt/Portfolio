import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Home.css'

const Home = () => {
  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm Luqman</h1>
          <p>
            A frontend developer passionate about creating clean,
            user-friendly websites and applications.
          </p>
          <Link to="/projects" className="btn-primary">
            View My Work
          </Link>
          <Link to="/game" className="btn-primary">
            Play a Quick Game!
          </Link>
        </div>
      </section>
      {/* Skills Section */}
      <section className="skills">
        <div className="skills-container">
          <h2 className="section-heading">Skills</h2>
          <div className="skills-grid">
            <span className="skill-badge">React</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">CSS</span>
            <span className="skill-badge">HTML</span>
            <span className="skill-badge">Node.js</span>
            <span className="skill-badge">APIs</span>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="projects-container">
          <h2 className="section-heading">Featured Projects</h2>
          
          <div className="projects-grid">
            {/* Project 1 */}
            <article className="project-item">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Project One"
                className="project-image"
              />
              <div className="project-details">
                <h3 className="project-title">Project One</h3>
                <p className="project-description">
                  A brief description of this project and what technologies were used.
                </p>
                <div className="tech-tags">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">CSS</span>
                </div>
              </div>
            </article>

            {/* Project 2 */}
            <article className="project-item">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Project Two"
                className="project-image"
              />
              <div className="project-details">
                <h3 className="project-title">Project Two</h3>
                <p className="project-description">
                  A brief description of this project and what technologies were used.
                </p>
                <div className="tech-tags">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">JavaScript</span>
                </div>
              </div>
            </article>
          </div>

          <div className="all-projects-link">
            <Link to="/projects" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-container">
          <h2 className="section-heading">Contact Me</h2>
          <div className="contact-links">
            <a href="mailto:your-email@example.com" className="contact-link">Email Me</a>
            <a href="https://www.linkedin.com/in/your-profile" className="contact-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/your-github" className="contact-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;