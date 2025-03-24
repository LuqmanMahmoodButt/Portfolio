import React from "react";
import { Link } from "react-router-dom";
import '../components/about.css'

const About = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "TypeScript", "Git", 
    "Responsive Design", "Django", "Node.js", "MongoDB", "Python"
  ];

  return (
    <div className="about">

      <div className="container">
        {/* About Content (Flex Column Layout) */}
        <div className="about-content">
          {/* Who I Am Section */}
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
              Hey! I'm Luqman, a frontend developer based in London. I specialize in 
              crafting sleek, responsive, and high-performing web applications.
            </p>
            <p>
              With a background in sales and tech, I transitioned into web development, 
              completing a rigorous Full Stack Development course at General Assembly. 
              I also have experience in filmmaking, event management, and leading sales teams. 
              My ability to blend creativity with technical problem-solving helps me build 
              engaging digital experiences.
            </p>
            <p>
              Before diving into development, I spent years honing my communication 
              and leadership skills in the sales industry, working with companies like EE 
              and Virgin Media. This experience shaped my ability to work efficiently in a team, 
              understand user needs, and develop user-friendly solutions.
            </p>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <h3>My Skills</h3>
            <div className="skill-list">
              {skills.map((skill, index) => (
                <span key={index} className="skill">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;