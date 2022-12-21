import React from 'react';
import recommendation from '../../db/Feedback';
import './Testimonial.css';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Feedback from peopele I have worked remotely with</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonialContainer"
          // install Swiper modules
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
      {
        recommendation.map((item) => (
          <SwiperSlide className="testimonial" key={item.id}>
              <div className="avatar">
                <img src={item.image} alt={item.name} />
              </div>
              <h5 className='peerName'>{item.name}</h5>
              <small className="review">{item.text}</small>
              <h5>{item.location}</h5>
          </SwiperSlide>
        )) 
        
      }
       
      </Swiper>
    </section>
  )
}

export default Testimonial