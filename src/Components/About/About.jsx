import React, { useState, useEffect } from 'react';
import animationHelpers from '../../helpers/animation-helper';

import './About.css';

export default function About() {
  const [sortOrder, setSortOrder] = useState([]);
  const [jumbledOrder, setJumbledOrder] = useState('');
  const [jumbledText, setJumbledText] = useState('');
  const [buttonDisplay, setButtonDisplay] = useState({ display: 'inline-block' });

  const [buttonClass, setButtonClass] = useState('about-button');
  const [textClass, setTextClass] = useState('about-h4');

  const goalText = `I'm based out of Houston and I strive to create apps that help people learn or otherwise better their lives. \n
  React is my go-to on the front-end, and I'm well versed in Node.js, Express, and PostgreSQL on the back-end. \n
  I love projects that push my abilities and require me to level up. \n
  I'm eager to find a team of driven, like-minded individuals that I can contribute my skills to. \n
  Feel free to take a look at some of recent work or connect with me below. 
  `;

  useEffect(() => {
    setJumbledOrder(animationHelpers.jumbleText(goalText));
  }, []);

  const createJumbledString = () => {
    const clone = goalText.split(' ');
    let output = '';
    for (let i = 0; i < jumbledOrder.length; i += 1) {
      output += `${clone[jumbledOrder[i]]} `;
    }
    return output;
  };

  useEffect(() => {
    const clone = [...jumbledOrder];
    setSortOrder(animationHelpers.selectionSort(clone));
    setJumbledText(createJumbledString());
  }, [jumbledOrder]);

  const animate = () => {
    const clone = jumbledText.split(' ');
    for (let i = 0; i < sortOrder.length; i += 2) {
      setTimeout(() => {
        const first = sortOrder[i];
        const second = sortOrder[i + 1];
        const temp = clone[first];
        clone[first] = clone[second];
        clone[second] = temp;
        setJumbledText(clone.join(' '));
      }, 4 + (4 * i));
    }
    setButtonClass('about-button clicked');
    setTextClass('about-text transition');
    setTimeout(() => {
      setButtonDisplay({ display: 'none' });
    }, 1500);
  };

  return (
    <section className="about-container">
      <h4 className={textClass}>{jumbledText}</h4>
      <button type="button" className={buttonClass} style={buttonDisplay} onClick={() => animate()}>Learn more about me</button>
    </section>
  );
}
