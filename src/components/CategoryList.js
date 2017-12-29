import React from "react";
import { ListGroup } from "react-bootstrap";
import CategoryItem from "./CategoryItem";

const categories = [
    { id: 1, name: 'Category1' },
    { id: 2, name: 'Category2' },
    { id: 3, name: 'Category3' },
];

const listItem = (category) => (
    <CategoryItem category={category} />
);

const CategoryList = () => (
    <ListGroup>
        {categories.map(listItem)}
    </ListGroup>
);

export default CategoryList;
