import React from "react";
import CommentItem from "./CommentItem";

const comments = [
    { id: 1, content: 'Comment1-1', category: { id: 1 } },
    { id: 2, content: 'Comment1-2', category: { id: 1 } },
    { id: 3, content: 'Comment1-3', category: { id: 1 } },
    { id: 4, content: 'Comment2-1', category: { id: 2 } },
    { id: 5, content: 'Comment2-2', category: { id: 2 } },
    { id: 6, content: 'Comment2-3', category: { id: 2 } },
    { id: 7, content: 'Comment3-1', category: { id: 3 } },
    { id: 8, content: 'Comment3-2', category: { id: 3 } },
    { id: 9, content: 'Comment3-3', category: { id: 3 } },
];

const listItem = (comment) => (
    <CommentItem comment={comment} />
);

const CategoryList = () => (
    <ul>
        {comments.map(listItem)}
    </ul>
);

export default CategoryList;
