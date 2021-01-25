import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import _HeroImg from './_HeroImg';

function Hero() {
    return (
            <Container fluid className="hw-100v">
                <Row className="h-100">
                    <Col md={6} className="bg-primary d-flex justify-content-center align-items-center">
                        ummm
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <_HeroImg />
                    </Col>
                </Row>
            </Container>
    );
}

export default Hero;