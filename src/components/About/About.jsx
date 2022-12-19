import React from 'react';
import ME from '../../assets/images/me.png';
import {FiAward} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Happy to have you here</h5>
      <h2>About Me</h2>

      <div className="container">
        <div className="meImg">
          <img src={ME} alt="Oyinlade" />
        </div>
        <div className="meContent">
           <div className="aboutCards">
            <article className="aboutCard">
              <FiAward />
              <h5>Experience</h5>
              <small>2+ years working experience</small>
            </article>
           </div>
           <div className="aboutCards">
            <article className="aboutCard">
              <VscFolder />
              <h5>Projects</h5>
              <small>25+ completed projects</small>
            </article>
           </div>
        </div>
      </div>
    </section>
  )
}

export default About