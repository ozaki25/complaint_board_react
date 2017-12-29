import React from "react";
import { Panel } from "react-bootstrap";
import CommentList from "./CommentList";

const title = "index of comments";

const Contents = () => (
    <Panel header={title} bsStyle="primary">
      <CommentList />
    </Panel>
);

export default Contents;
