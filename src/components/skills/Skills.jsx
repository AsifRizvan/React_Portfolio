import React, { useEffect } from 'react';
import AOS from 'aos'; 
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Level</span>

      <div className="skills_container container grid"  data-aos="fade-up" data-aos-offset="350">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
