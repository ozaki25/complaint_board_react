import React from "react";
import { connect } from "react-redux";
import { Col, Grid, Row } from "react-bootstrap";
import SideMenu from "../components/SideMenu";
import Contents from "../components/Contents";

const tmpCategories = [
  { id: 1, name: "Category1" },
  { id: 2, name: "Category2" },
  { id: 3, name: "Category3" }
];

const tmpComments = [
  { id: 1, content: "Comment1-1", category: { id: 1 } },
  { id: 2, content: "Comment1-2", category: { id: 1 } },
  { id: 3, content: "Comment1-3", category: { id: 1 } }
];

let Main = ({ categories, comments }) => (
  <Grid>
    <Row>
      <Col xs={3}>
        <SideMenu categories={categories} />
      </Col>
      <Col xs={9}>
        <Contents comments={comments} />
      </Col>
    </Row>
  </Grid>
);

const mapStateToProps = state => {
  return {
    categories: tmpCategories,
    comments: tmpComments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickCategory: () => {}
  };
};

Main = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Main;
