import React from 'react';

export default function Contact() {
  return (
    <section id="contact">

      <h4>Contact me</h4>
      <div className="contact-container">
        <a href="mailto:snschroeder89@gmail.com"><i class="far fa-envelope"></i></a>
        <a href="https://github.com/snschroeder?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
        <a href="https://www.linkedin.com/in/scott-schroeder/"><i className="fab fa-linkedin" /></a>
      </div>
    </section>
  )
}