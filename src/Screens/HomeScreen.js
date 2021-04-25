import React from "react";
import { Row, Col, Image, Divider } from "antd";
import beaver from "../assets/beaver.png";
import plus from "../assets/plus.png";

const HomeScreen = () => {
  return (
    <Row className="headerContainer">
      <Row className="beaverIconContainer">
        <img className="beaverIcon" src={beaver}></img>
      </Row>
      <Col className="myProjectsText">My Projects</Col>
      <img className="plusImage" src={plus}></img>
    </Row>
  );
};

export default HomeScreen;
