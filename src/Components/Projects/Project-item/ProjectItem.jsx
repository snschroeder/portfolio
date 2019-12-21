import React from 'react';
import PropTypes from 'prop-types';
import Divider from '../../Divider/Divider';

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
        <span className="pipe-divider"> || </span>
        <a href={fRepo} target="_blank" rel="noopener noreferrer">Client Repo</a>
        <span className="pipe-divider"> || </span>
        <a href={bRepo} target="_blank" rel="noopener noreferrer">Server Repo</a>
      </div>
      <div className="background-container" id={id}>
        <div className="info-container">
          <h5 className="grid-item-h5">{stack}</h5>
          <Divider />
          <h4 className="grid-item-h4">{desc}</h4>
        </div>
      </div>
    </li>

  );
}

ProjectItem.defaultProps = {
  title: '',
  id: '',
  desc: '',
  stack: '',
  fRepo: '',
  bRepo: '',
  live: '',
};

ProjectItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  desc: PropTypes.string,
  stack: PropTypes.string,
  fRepo: PropTypes.string,
  bRepo: PropTypes.string,
  live: PropTypes.string,
};
