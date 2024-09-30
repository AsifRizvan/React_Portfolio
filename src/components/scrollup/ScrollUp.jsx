import React from 'react'
import './scrollup.css'

function ScrollUp() {
    window.addEventListener("scroll", function(){
        const scrollUp = document.querySelector(".scrollup");
        //when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })
  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  )
}

export default ScrollUp