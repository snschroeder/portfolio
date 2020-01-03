import React from 'react';

import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <p className="footer">
        <div className="contact-container">
          <a className="contact-link" href="mailto:snschroeder89@gmail.com" aria-label="email"><i className="far fa-envelope" /></a>
          <a className="contact-link" href="https://github.com/snschroeder?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="github"><i className="fab fa-github" /></a>
          <a className="contact-link" href="https://www.linkedin.com/in/scott-schroeder/" target="_blank" rel="noopener noreferrer" aria-label="linked in"><i className="fab fa-linkedin" /></a>
        </div>
        <i className="far fa-copyright" />
        2019 Scott Schroeder
      </p>
    </footer>
  );
}
