import React from 'react'
import AboutImage from '../../media/YoLentes_png.png'
import './about.css'

const About = () => {
  return (
    <div className="about">
      <img className="about-image" src={AboutImage} alt=""/>
      <h2 className="about-title">Juan Santillán</h2>
      <h3 className="about-hobbies">ReactJS Dev</h3>
      <p className="about-description">
        I am a Software Engineer, my interests are
        programming, drawing and bicycling. I’m
        interested in developing myself as a web
        developer. I’m also a dedicated, self-taught
        person and I like to share what I learn with
        others.
      </p>
      <div className="about-socials">
        <img className="social-img-github" src="https://image.flaticon.com/icons/png/512/23/23957.png" alt=""/>
        <a className="social-link-github" href="https://github.com/JuanYut/"  target="_blank">JuanYut</a>

      </div>
    </div>
  )
}

export default About
