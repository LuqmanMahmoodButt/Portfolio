import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 
    'TypeScript', 'Git', 'Responsive Design', 'Django','node', 'mongoDb', 'Python'
  ];

  return (
    <section className="about" style={{ paddingTop: '100px' }}>
      <div className="container">
        <h1 className="section-title">About Me</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
              Hello! I'm Luqman, a frontend developer based in London. 
              I specialize in building responsive websites and web applications 
              that provide a great user experience.
            </p>
            <p>
              With 2 years of experience in web development, I've worked on various 
              projects ranging from small business websites to complex web applications. 
              I'm passionate about clean code, accessibility, and modern design.
            </p>
            
            <div className="skills">
              <h3>My Skills</h3>
              <div className="skill-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill">{skill}</span>
                ))}
              </div>
            </div>
            
            <div style={{ marginTop: '30px' }}>
              <Link to="/contact" className="btn">Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
