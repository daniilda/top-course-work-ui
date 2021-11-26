import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>TOPCourseWork-UI</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/data"}>Данные</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;