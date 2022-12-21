import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    const submission = {name, email, message}
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Your Full Name"
        required
        onChange={(e) => {
          setName(e.value);
        }}
      />
      <input
        type="email"
        value={email}
        name="email"
        placeholder="Your Email"
        required
        onChange={(e) => {
          setEmail(e.value);
        }}
      />
      <textarea
        value={message}
        name="message"
        id=""
        cols="30"
        rows="7"
        placeholder="Your Message"
        required
        onChange={(e) => {
          setMessage(e.value);
        }}
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
