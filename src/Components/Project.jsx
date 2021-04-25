import React from "react";
import { Row, Col } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment";
import beaver from "../assets/beaver.png";

const Project = ({ project }) => {
  return (
    <>
      <Row className="projectContainer" justify="center">
        <Col span={3}>
          <img src={beaver}></img>
        </Col>
        <Col span={3}>
          <div>{project.name}</div>
        </Col>
        <Col span={3}>
          <EditOutlined />
        </Col>
        <Col span={3}>{moment(project.createdAt).format("LLL")}</Col>
        <Col span={3}>
          <DeleteOutlined />
        </Col>
      </Row>
    </>
  );
};

export default Project;
