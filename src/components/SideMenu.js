import React from "react";
import { Panel } from "react-bootstrap";
import CategoryList from "./CategoryList";
import NoContents from "./NoContents";

const title = "index of categories";

const SideMenu = ({ categories }) => (
    <Panel header={title} bsStyle="success">
        {categories.length ? <CategoryList categories={categories} fill /> : <NoContents />}
    </Panel>
);

export default SideMenu;
