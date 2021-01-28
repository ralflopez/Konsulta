import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import HeroImg from './_HeroImg';
import HeroTitle from './_HeroTitle';

function Hero() {
    return (
        <Container fluid className="hw-100v">
            <Row className="h-100 flex-column flex-md-row hero-row">
                <Col md={6} className="hero-title-container br-50">
                    <HeroTitle />
                </Col>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <HeroImg />
                </Col>
                <div className="call-to-action-sm">
                    <Button variant="outline-primary">Find a Doctor</Button>
                </div>
            </Row>
        </Container>
    );
}

export default Hero;