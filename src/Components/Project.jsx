import React from "react";
import { Row, Col } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment";
import beaver from "../assets/beaver.png";

/**
 * Renders a project including name and time of creation
 */
const Project = ({ project }) => {
  /**
   * Delete a project from the project list
   */
  const deleteProjectHandler = () => {
    //TODO: Implement project delete logic
  };

  /**
   * Edit a project name
   */
  const editProjectHandler = () => {
    //TODO: Implement project name edit logic
  };

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
          <EditOutlined onClick={editProjectHandler} />
        </Col>
        <Col span={3}>{moment(project.createdAt).format("LLL")}</Col>
        <Col span={3}>
          <DeleteOutlined onClick={deleteProjectHandler} />
        </Col>
      </Row>
    </>
  );
};

export default Project;
