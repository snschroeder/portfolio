import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import animationHelpers from '../../helpers/animation-helper';

export default function About(props) {
  const [sortOrder, setSortOrder] = useState([]);
  const [jumbledOrder, setJumbledOrder] = useState('');
  const [jumbledText, setJumbledText] = useState('');

  const { goalText } = props;

  useEffect(() => {
    setJumbledOrder(animationHelpers.jumbleText(goalText));
  }, []);

  const createJumbledString = () => {
    let output = '';
    for (let i = 0; i < jumbledOrder.length; i += 1) {
      output += goalText[jumbledOrder[i]];
    }
    return output;
  };

  useEffect(() => {
    const clone = [...jumbledOrder];
    setSortOrder(animationHelpers.selectionSort(clone));
    setJumbledText(createJumbledString());
  }, [jumbledOrder]);

  const animate = () => {
    const clone = jumbledText.split('');
    for (let i = 0; i < sortOrder.length; i += 2) {
      setTimeout(() => {
        const first = sortOrder[i];
        const second = sortOrder[i + 1];
        const temp = clone[first];
        clone[first] = clone[second];
        clone[second] = temp;
        setJumbledText(clone.join(''));
      }, 20 + (20 * i));
    }
  };

  return (
    <section>
      <button type="button" onClick={() => animate()}>Tell me about yourself</button>
      <h1>{jumbledText}</h1>
    </section>
  );
}

About.defaultProps = {
  goalText: '',
};

About.propTypes = {
  goalText: PropTypes.string,
};
