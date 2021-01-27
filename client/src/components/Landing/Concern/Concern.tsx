import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CaptionSide from './_CaptionSide';
import ConcernTxtBox from './_ConcernTxtBox';

function Concern() {
    return (
        <Container className="h-100v ">
            <Row className="d-flex justify-content-between ox-hidden p-navbar">
                <Col xs={11} md={6} className="mx-auto">
                    <CaptionSide />
                </Col>
                <Col xs={11} md={6} className="mx-auto">
                    <ConcernTxtBox />
                </Col>
            </Row>
        </Container>
    );
}

export default Concern;