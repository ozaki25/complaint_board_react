import React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import SideMenu from "./SideMenu";
import Contents from "./Contents";

const Main = ({ categories }) => (
  <Grid>
    <Row>
      <Col xs={3}>
        <SideMenu categories={categories} />
      </Col>
      <Col xs={9}>
        <Contents />
      </Col>
    </Row>
  </Grid>
);

export default Main;
