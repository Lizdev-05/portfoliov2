import React from 'react';
import recommendation from '../../db/Feedback';
import './Testimonial.css'

const Testimonial = () => {
  return (
    <section id='#testimonial'>
      <h5>Feedback from peopele I have worked remotely with</h5>
      <h2>Testimonials</h2>

      <div className="container testimonialContainer">
      {
        recommendation.map((item) => (
          <article className="testimonial" key={item.id}>
              <div className="avatar">
                <img src={item.image} alt={item.name} />
              </div>
              <h5 className='peerName'>{item.name}</h5>
              <small className="review">{item.text}</small>
              <h5>{item.location}</h5>
          </article>
        )) 
        
      }
       
      </div>
    </section>
  )
}

export default Testimonial