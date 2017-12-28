import React from "react";
import { Panel } from "react-bootstrap";
import CategoryList from "./CategoryList";

const title = "index of categories";

const SideMenu = () => (
    <Panel header={title} bsStyle="success">
        <CategoryList fill />
    </Panel>
);

export default SideMenu;
