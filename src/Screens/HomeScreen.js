import React from "react";
import { Row, Col, Image, Divider } from "antd";
import beaver from "../assets/beaver.png";
import plus from "../assets/plus.png";

const HomeScreen = () => {
  // TODO: Project State to track projects

  return (
    <Row className="headerContainer">
      <Row className="beaverIconContainer">
        <img className="beaverIcon" src={beaver}></img>
      </Row>
      <Col className="myProjectsText">My Projects</Col>
      // TODO: Render Project Form onClick
      <img className="plusImage" src={plus}></img>
    </Row>

    // TODO: Render Project List with a list of projects from state
  );
};

export default HomeScreen;
