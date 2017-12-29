import React from "react";
import CommentItem from "./CommentItem";

const listItem = (comment) => (
    <CommentItem key={comment.id} comment={comment} />
);

const CategoryList = ({ comments }) => (
    <ul>
        {comments.map(listItem)}
    </ul>
);

export default CategoryList;
