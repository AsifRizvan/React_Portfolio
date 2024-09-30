import React, { useState, useEffect } from 'react';
import "./header.css";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  //change background header
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="index.html" className='nav_logo'>Asif Rizvan</a>

        <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className='nav_item'>
              <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? "nav_link active_link" : "nav_link"}>
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>
            <li className='nav_item'>
              <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "nav_link active_link" : "nav_link"}>
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>
            <li className='nav_item'>
              <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? "nav_link active_link" : "nav_link"}>
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>
            <li className='nav_item'>
              <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? "nav_link active_link" : "nav_link"}>
                <i className="uil uil-scenery nav_icon"></i> Projects
              </a>
            </li>
            <li className='nav_item'>
              <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "nav_link active_link" : "nav_link"}>
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
             <li className='nav_item'>
             {/* Dark/Light Mode Toggle */}
                <div className="theme_switch">
                <a href="" className='nav_link nav_switch'><i className={`uil ${theme === 'dark' ? 'uil-sun' : 'uil-moon'}`} onClick={toggleTheme}></i></a> 
                </div>
            </li>
          </ul>
          <i className="uil uil-times nav_close" onClick={() => setToggle(!toggle)}></i>
        </div>

        <div className="nav_toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>

        
      </nav>
    </header>
  );
}

export default Header;
