import React from 'react';

import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <h4 className="contact-h4">Contact me</h4>
      <div className="contact-container">
        <a className="contact-link" href="mailto:snschroeder89@gmail.com" aria-label="email"><i className="far fa-envelope" /></a>
        <a className="contact-link" href="https://github.com/snschroeder?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="github"><i className="fab fa-github" /></a>
        <a className="contact-link" href="https://www.linkedin.com/in/scott-schroeder/" target="_blank" rel="noopener noreferrer" aria-label="linked in"><i className="fab fa-linkedin" /></a>
      </div>
    </section>
  );
}
