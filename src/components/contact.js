import React, { useState } from 'react';
import './contact.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send an email or store the data)
    console.log({ email, name, message });
  };

  return (
    <div className="contact-form-container">
      <pre className="contact-form-json">
        {'{'}
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            "email": <input type="email" placeholder="your email address" value={email} onChange={(e) => setEmail(e.target.value)} />,
          </div>
          <div>
            "name": <input type="text" placeholder="your name"  value={name} onChange={(e) => setName(e.target.value)} />,
          </div>
          <div className="message-container">
            "message": <textarea placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} />,
          </div>
         
        </form>
        {'}'}

        <div>
            <button type="submit">"send"</button>
          </div>
      </pre>
    </div>
  );
};

export default ContactForm;
