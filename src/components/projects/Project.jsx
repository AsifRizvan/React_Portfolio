import React from 'react'
import './project.css'
import Works from './Works'

function Project() {
  return (
    <div className="section work section" id="projects">
        <h3 className="section_title">Projects</h3>
        <span className="section_subtitle">Most recent works</span>

        <Works/>
    </div>
  )
}

export default Project