import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import beaver from "../assets/beaver.png";
import plus from "../assets/plus.png";
import { v4 as uuidv4 } from "uuid";
import ProjectList from "../Components/ProjectList";

/**
 * Main screen where user can view and modify their projects
 */
const HomeScreen = () => {
  const [projectList, setProjectList] = useState([]);
  const [projectInput, setProjectInput] = useState("");

  /**
   * Update the input box for project name
   */
  const handleInputChange = (e) => {
    setProjectInput(e.target.value);
  };

  /**
   * Create a new project and add it to the state
   */
  const handleOnClick = () => {
    // Create the new project structure with unique ID
    const project = {
      name: projectInput,
      createdAt: Date.now(),
      id: uuidv4(),
    };

    // Created new project list including previously added projects and update state
    setProjectList([project, ...projectList]);
  };

  return (
    <>
      <Row className="headerContainer">
        <Row className="beaverIconContainer">
          <img className="beaverIcon" src={beaver}></img>
        </Row>
        <Col className="myProjectsText">My Projects</Col>
        <img className="plusImage" src={plus}></img>
      </Row>
      <Row>
        <input value={projectInput} onChange={handleInputChange}></input>
        <Button onClick={handleOnClick}>Add Project</Button>
      </Row>
      {projectList.length > 0 ? (
        <ProjectList projectList={projectList} />
      ) : (
        <div>No Projects To Show</div>
      )}
    </>
  );
};

export default HomeScreen;
