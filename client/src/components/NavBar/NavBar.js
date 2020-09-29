import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="/">QuizApp</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Add Subject</Nav.Link>
          <Nav.Link href="/testList">Quiz</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
