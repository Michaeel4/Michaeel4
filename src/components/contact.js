import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
const ContactForm = () => {
    
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

      // Replace these values with the ones you got from EmailJS
      const serviceId = 'service_1pfvz4m';
      const templateId = 'template_uyw7qnc';
      const userId = 'ooVoio-zxMiOl5WIV';

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };
  
      emailjs.send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          // Clear the form after successful submission
          setEmail('');
          setName('');
          setMessage('');
        }, (err) => {
          console.log('FAILED...', err);
        });
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
          <button type="submit">"send"</button>

        </form>
        {'}'}

        <div>
          </div>
      </pre>
    </div>
  );
};

export default ContactForm;
