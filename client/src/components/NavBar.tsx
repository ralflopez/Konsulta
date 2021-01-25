import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import logo from '../assets/logo.svg';

function NavBar() {
    return (
        <Navbar fixed="top">
            <Container className="pt-3 pb-3">
                <Row className="w-100 mx-auto">
                    <Col md={6} className="p-0">
                        <Navbar.Brand>
                            {/* <img src={logo} className="brand-logo"/> */}
                        </Navbar.Brand>
                    </Col>
                    <Col md={6} className="p-0">
                        <Nav className="d-flex justify-content-around">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Consult</Nav.Link>
                            <Nav.Link>Profile</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default NavBar;