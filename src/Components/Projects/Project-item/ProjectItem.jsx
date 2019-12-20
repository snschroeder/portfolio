import React from 'react';
import PropTypes from 'prop-types';

import './ProjectItem.css';

// import image from '../../../image-assets/chord-courier.png'

export default function ProjectItem(props) {
  const {
    title,
    desc,
    stack,
    // image,
    fRepo,
    bRepo,
    live,
  } = props;

  // const imageHeader = '../../../image-assets/';

  // const backgroundStyle = {
  //   background: `linear-gradient( rgba(0, 0, 0, 0.666), rgba(0, 0, 0, 0.666) ), url('${image}')`,
  // };

  return (
    <li className="grid-item" id={title}>
      <h3 className="grid-item-h3">{title}</h3>

      <div className="link-style">
        <a href={live} target="_blank" rel="noopener noreferrer">Live App</a>
        <span className="divider"> // </span>
        <a href={fRepo} target="_blank" rel="noopener noreferrer">Client Repo</a>
        <span className="divider"> // </span>
        <a href={bRepo} target="_blank" rel="noopener noreferrer">Server Repo</a>
      </div>
      <h4 className="grid-item-h4">{desc}</h4>
      <h4 className="grid-item-h4">{stack}</h4>
      {/* <h4 className="grid-item-h4">{image}</h4> */}
      {/* <div className="background-container" style={{ backgroundStyle }} /> */}
      {/* <h4 className="grid-item-h4">{fRepo}</h4>
      <h4 className="grid-item-h4">{bRepo}</h4>
      <h4 className="grid-item-h4">{live}</h4> */}
    </li>
  );
}

ProjectItem.defaultProps = {
  title: '',
  desc: '',
  stack: '',
  image: '',
  fRepo: '',
  bRepo: '',
  live: '',
};

ProjectItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  stack: PropTypes.string,
  image: PropTypes.string,
  fRepo: PropTypes.string,
  bRepo: PropTypes.string,
  live: PropTypes.string,
};
