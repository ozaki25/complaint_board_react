import React from "react";
import { Panel } from "react-bootstrap";
import CommentList from "./CommentList";
import NoContents from "./NoContents";

const title = "index of comments";

const Contents = ({ comments }) => (
    <Panel header={title} bsStyle="primary">
      { comments.length ? <CommentList comments={comments} /> : <NoContents /> }
    </Panel>
);

export default Contents;
