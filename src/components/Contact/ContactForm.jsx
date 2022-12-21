import React, { useState } from "react";
import axios from "axios";
import { getFormKey } from "../../config/apiKeys";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
//   const [messageError, setMessageError] = useState<boolean>(false);
  const [success, setSuccess] = useState(false);

 
    // if (message.trim().length < 1) {
    //   raiseError("Message cannot be blank");
    //   setMessageError(true);
    //   return;
    // }

    // if (message.length < 5) {
    //   raiseError("The message is too short");
    //   setMessageError(true);
    //   return;
    // }

  const handleSubmit = async (e) => {
    e.preventDefault();  
    const submission = { name, email, message };
    const { data } = await axios.post(
      `https://getform.io/f/${getFormKey}`,
      submission,
      { headers: { Accept: "application/json" } }
    );
    if(data.success){
        setSuccess(true)
        setName('');
        setEmail('')
        setMessage('');
    }
    console.log(data);
  };



  return (
    <form action="" onSubmit={handleSubmit}>
        <h2>{success ? "Your message has been sent successfully" : " "}</h2>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Your Full Name"
        minLength={3}
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
        
      />
      <input
        type="email"
        value={email}
        name="email"
        placeholder="Your Email"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <textarea
        value={message}
        name="message"
        id=""
        minLength={5}
        cols="30"
        rows="7"
        placeholder="Your Message"
        required
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
