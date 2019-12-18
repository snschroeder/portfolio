import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './Project-item/ProjectItem';

export default function Projects(props) {
  const { projects } = props;

  return (
    <section id="projects">
      <h4 className="projects-h4">Recent work</h4>
      <ul className="grid-container">
        {projects.map((project) => (
          <ProjectItem
            title={project.title}
            desc={project.description}
            stack={project.stack}
            image={project.image}
            fRepo={project.fRepo}
            bRepo={project.bRepo}
            live={project.live}
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
