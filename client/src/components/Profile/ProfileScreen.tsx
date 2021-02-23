import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function ProfileScreen() {
    return(
        <Container className="p-navbar">
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    <h4 className="mb-3">Profile</h4>
                    <h2 className="mb-5">Hello, <strong>User</strong></h2>
                    <button className="btn btn-primary">Sign Out</button>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfileScreen;