import React, { useState } from "react";
import axios from "axios";
import { getFormKey } from "../../config/apiKeys";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submission = { name, email, message };
  console.log(submission);
    const { data } = await axios.post(
      `https://getform.io/f/${getFormKey}`,
      submission,
      { headers: { Accept: "application/json" } }
    );
    if(data.success){
        
    }
    console.log(data);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Your Full Name"
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