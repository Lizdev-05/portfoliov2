import React from 'react';
import { data }from '../../db/Data';
import './Projects.css'

{/* <div className="portfolio__item-content">
<h3>{pro.title}</h3>
<p>{pro.description}</p>
<p>{pro.technologies}</p>
</div> */}
const Projects = () => {
  return (
    <section id='#project'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      
      <div className="container portfolioContainer">
         {
          data.map((item) => (
           <article key={item.id} className='portfolioItems'>
              <div className='portfolioItemsImage'>
                 <img src={item.image} alt="Project" />
              </div>
              <div className="portfolioItemContent">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              </div>
              <div className="portfolioItemsCta">
                <a href={item.live} className='btn btn-primary' target='_blank'>Live</a>
                <a href={item.source} className='btn' target='_blank'>Source</a>
              </div>
           </article> 
          ))
         }
      </div>
    </section>
  )
}

export default Projects