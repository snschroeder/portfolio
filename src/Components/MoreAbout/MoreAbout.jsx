import React from 'react';

import './MoreAbout.css';

export default function MoreAbout() {
  const text = `My background is in sales and journalism. I enjoyed both fields, though found myself wanting something that required more creativity and technical problem solving skills.

  I started teaching myself to code and was instantly hooked. Java and Python were the first two languages I taught myself. More recently, I've been working full-time with Javascript, React, Node.js, Express, and PostgreSQL. 

  I strive to create clean, user-friendly UI/UX designs, and love finding ways to animate or display non-typical elements programmatically through React. 

  When I'm not working, you'll likely find me reading, gaming, biking, or doing yoga.
  `;

  return (
    <section className="more-about-container">
      <h4 className="more-about-h4">More about me</h4>
      <p className="more-about-p">{text}</p>
    </section>
  );
}
