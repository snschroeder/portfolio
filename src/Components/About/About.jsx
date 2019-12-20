import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import animationHelpers from '../../helpers/animation-helper';

import './About.css';

export default function About(props) {
  const [sortOrder, setSortOrder] = useState([]);
  const [jumbledOrder, setJumbledOrder] = useState('');
  const [jumbledText, setJumbledText] = useState('');
  // const [buttonDisplay, setButtonDisplay] = useState({ display: 'inline-block' });

  const [buttonClass, setButtonClass] = useState('about-button');
  const [textClass, setTextClass] = useState('about-h2');

  const { goalText } = props;

  useEffect(() => {
    setJumbledOrder(animationHelpers.jumbleText(goalText));
  }, []);

  // const createJumbledString = () => {
  //   let output = '';
  //   for (let i = 0; i < jumbledOrder.length; i += 1) {
  //     output += goalText[jumbledOrder[i]];
  //   }
  //   return output;
  // };

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
    // setButtonDisplay({ display: 'none' });
    setButtonClass('about-button clicked');
    setTextClass('about-text transition');
  };

  return (
    <section className="about-container">
      <button type="button" className={buttonClass} onClick={() => animate()}>Learn more about me</button>
      <h2 className={textClass}>{jumbledText}</h2>
    </section>
  );
}

About.defaultProps = {
  goalText: '',
};

About.propTypes = {
  goalText: PropTypes.string,
};
