import React from "react";
import { ListGroup } from "react-bootstrap";
import CategoryItem from "./CategoryItem";

const listItem = (category) => (
    <CategoryItem category={category} />
);

const CategoryList = ({ categories }) => (
    <ListGroup>
        {categories.map(listItem)}
    </ListGroup>
);

export default CategoryList;
