import React from "react";
import Project from "./Project";

/**
 * Renders a list of projects
 */
const ProjectList = ({ projectList, removeProject }) => {
  return projectList.map((project) => (
    <Project key={project.id} project={project} removeProject={removeProject} />
  ));
};

export default ProjectList;
