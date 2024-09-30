import React, { useEffect } from 'react';
import AOS from 'aos';
import { projectsData } from './Data';
import WorkItems from './WorkItems';

function Works() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="work_container container grid" data-aos="fade-up" data-aos-offset="300">
      {projectsData.map(item => (
        <WorkItems item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Works;
