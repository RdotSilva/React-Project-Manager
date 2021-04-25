import React from "react";
import { Row, Col } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import beaver from "../assets/beaver.png";

// TODO: Remove mock values and use props to populate the project properties

const Project = ({ project }) => {
  return (
    <>
      <Row className="projectContainer" justify="center">
        <Col span={3}>
          <img src={beaver}></img>
        </Col>
        <Col span={3}>
          <div>Project Name</div>
        </Col>
        <Col span={3}>
          <EditOutlined />
        </Col>
        <Col span={3}>Time Date</Col>
        <Col span={3}>
          <DeleteOutlined />
        </Col>
      </Row>
    </>
  );
};

export default Project;
