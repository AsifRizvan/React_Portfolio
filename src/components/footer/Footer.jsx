import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Asif Rizvan</h1>

            <ul className="footer_list">
                <li>
                    <a href="#home" className="footer_link">Home</a>
                </li>

                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer_link">Projects</a>
                </li>
            </ul>

            <div className="footer_social">
            <a href="https://www.instagram.com/" className="footer_social-link" target='_blank'><i className="bx bxl-instagram"></i></a>
        <a href="https://dribbble.com/" className="footer_social-link" target='_blank'><i className="bx bxl-linkedin"></i></a>
        <a href="https://github.com/" className="footer_social-link" target='_blank'><i className="bx bxl-github"></i></a>
            </div>

            <div className="footer_copy">
            &#169; Asif Rizvan. All rights reserved
            </div>
        </div>
    </footer>
  )
}

export default Footer