import React from "react";
import { Nav, NavItem, Navbar } from "react-bootstrap";

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">ComplaintBoardReact</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
