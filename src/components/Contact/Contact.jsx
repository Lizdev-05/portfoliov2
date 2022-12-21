import React from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='#contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>
       <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactOption">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>ojesanmioyinlade@gmail.com</h5>
            <a href="mailto:ojesanmioyinlade@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contactOption">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Elizabeth Ojesanmi</h5>
            <a href="https://m.me/ojesanmi.oyinlade/" target="_blank">Send a message</a>
          </article>
          <article className="contactOption">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+2348104433432</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348104433432" target="_blank">Send a message</a>
          </article>
        </div>
       </div>
    </section>
  )
}

export default Contact