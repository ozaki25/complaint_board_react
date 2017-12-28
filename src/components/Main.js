import React from "react";
import { Col, Grid, Row } from "react-bootstrap";

const Main = () => (
  <Grid>
    <Row>
      <Col xs={3}>
        <h1>Col-3</h1>
      </Col>
      <Col xs={9}>
        <h1>Col-9</h1>
      </Col>
    </Row>
  </Grid>
);

export default Main;
