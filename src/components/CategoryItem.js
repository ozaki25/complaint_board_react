import React from "react";
import { ListGroupItem } from "react-bootstrap";

const CategoryItem = ({category}) => (
    <ListGroupItem>
        {category.name}
    </ListGroupItem>
);

export default CategoryItem;
