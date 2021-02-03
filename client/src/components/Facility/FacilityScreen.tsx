import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sample from '../../assets/sample.jpg';
import Carousel from './_Carousel';

function FacilityScreen() {
    return (
        <Container className="p-navbar">
            <Row>
                <Col>
                    <Carousel />
                </Col>
            </Row>
        </Container>
    );
}

export default FacilityScreen;