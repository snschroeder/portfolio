import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './Project-item/ProjectItem';

import './Project.css';

export default function Projects(props) {
  const { projects } = props;

  return (
    <section id="projects">
      <h4 className="projects-h4">Recent work</h4>
      <ul className="grid-container">
        {projects.map((project) => (
          <ProjectItem
            title={project.title}
            id={project.id}
            desc={project.desc}
            stack={project.stack}
            image={project.image}
            fRepo={project.fRepo}
            bRepo={project.bRepo}
            live={project.live}
            key={project.id}
          />
        ))}
      </ul>
    </section>
  );
}

Projects.defaultProps = {
  projects: [],
};

Projects.propTypes = {
  projects: PropTypes.instanceOf(Array),
};
