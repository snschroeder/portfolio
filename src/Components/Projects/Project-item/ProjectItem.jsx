import React from 'react';
import PropTypes from 'prop-types';

import './ProjectItem.css';

export default function ProjectItem(props) {
  const {
    title,
    id,
    desc,
    stack,
    fRepo,
    bRepo,
    live,
  } = props;

  return (
    <li className="grid-item">
      <h3 className="grid-item-h3">{title}</h3>
      <div className="link-style">
        <a href={live} target="_blank" rel="noopener noreferrer">Live App</a>
        <span className="divider"> || </span>
        <a href={fRepo} target="_blank" rel="noopener noreferrer">Client Repo</a>
        <span className="divider"> || </span>
        <a href={bRepo} target="_blank" rel="noopener noreferrer">Server Repo</a>
      </div>
      <div className="background-container" id={id}>
        {/* <div className="link-style">
          <a href={live} target="_blank" rel="noopener noreferrer">Live App</a>
          <span className="divider"> // </span>
          <a href={fRepo} target="_blank" rel="noopener noreferrer">Client Repo</a>
          <span className="divider"> // </span>
          <a href={bRepo} target="_blank" rel="noopener noreferrer">Server Repo</a>
        </div> */}
        <div className="info-container">
          <h4 className="grid-item-h4">{desc}</h4>
          <h5 className="grid-item-h5">{stack}</h5>
        </div>

        {/* <h4 className="grid-item-h4">{image}</h4> */}
        {/* <div className="background-container" style={{ backgroundStyle }} /> */}
        {/* <h4 className="grid-item-h4">{fRepo}</h4>
        <h4 className="grid-item-h4">{bRepo}</h4>
        <h4 className="grid-item-h4">{live}</h4> */}
      </div>
    </li>

  );
}

ProjectItem.defaultProps = {
  title: '',
  id: '',
  desc: '',
  stack: '',
  // image: '',
  fRepo: '',
  bRepo: '',
  live: '',
};

ProjectItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  desc: PropTypes.string,
  stack: PropTypes.string,
  // image: PropTypes.string,
  fRepo: PropTypes.string,
  bRepo: PropTypes.string,
  live: PropTypes.string,
};
