import React from "react";
import Project from "./Project";
import { Row } from "antd";

/**
 * Responsible for rendering a list of projects
 */
const ProjectList = ({ projectList }) => {
  return projectList.map((project) => (
    <Project key={project.id} project={project} />
  ));
};

export default ProjectList;
