import React from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import './Contact.css'

const Contact = () => {
  return (
    <section id='#contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>
       
       <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactOption">
            <MdOutlineEmail className='contactIcon' />
            <h4>Email</h4>
            <h5>ojesanmioyinlade@gmail.com</h5>
            <a href="mailto:ojesanmioyinlade@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contactOption">
            <RiMessengerLine className='contactIcon'/>
            <h4>Messenger</h4>
            <h5>Elizabeth Ojesanmi</h5>
            <a href="https://m.me/ojesanmi.oyinlade/" target="_blank">Send a message</a>
          </article>
          <article className="contactOption">
            <BsWhatsapp className='contactIcon' />
            <h4>WhatsApp</h4>
            <h5>+2348104433432</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348104433432" target="_blank">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
       </div>
    </section>
  )
}

export default Contact