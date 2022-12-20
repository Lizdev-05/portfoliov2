import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';

const Skills = () => {
  return (
    <section id='#skills' >
     <div className="container skillsContainer">
          <h5>Technologies I've Used</h5>
          <h2>Skills</h2>
        <div className="skillsContent">
          <div className="frontend">
              <div className="frontendTools">
                <h3>Front-end Development</h3>
               <article className="skillsDetails">
                 <BsPatchCheckFill />
                 <h4>HTML</h4>
               </article>
               <article className="skillsDetails">
                 <BsPatchCheckFill />
                 <h4>CSS</h4>
               </article>
               <article className="skillsDetails">
                 <BsPatchCheckFill />
                 <h4>TAILWIND/SCSS</h4>
               </article>
               <article className="skillsDetails">
                 <BsPatchCheckFill />
                 <h4>JavaScript</h4>
               </article>
               <article className="skillsDetails">
                 <BsPatchCheckFill />
                 <h4>React Js</h4>
               </article>
               <article className="skillsDetails">
                 <BsPatchCheckFill />
                 <h4>Redux</h4>
               </article>
              </div>
           </div>
           <div className="backend">
             <div className="backendTools">
             <h3>Back-end Development</h3>
               <article className="skillsDetails">
                 <BsPatchCheckFill />
                 <h4>Ruby</h4>
               </article>
               <article className="skillsDetails">
                 <BsPatchCheckFill />
                 <h4>Ruby on Rails</h4>
               </article>
               <article className="skillsDetails">
                 <BsPatchCheckFill />
                 <h4>Postgresql</h4>
               </article>
               <article className="skillsDetails">
                 <BsPatchCheckFill />
                 <h4>RSpec</h4>
               </article>
               <article className="skillsDetails">
                 <BsPatchCheckFill />
                 <h4>Swagger</h4>
               </article>
               <article className="skillsDetails">
                 <BsPatchCheckFill />
                 <h4>Git/GitHub</h4>
               </article>
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Skills