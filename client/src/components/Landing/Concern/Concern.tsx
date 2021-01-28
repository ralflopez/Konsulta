import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CaptionSide from './_CaptionSide';
import ConcernTxtBox from './_ConcernTxtBox';

function Concern() {
    return (
        <Container className="h-100v">
            <Row className="ox-hidden w-100 mt-2 mt-md-4">
                <Col xs={11} md={6} className="mx-auto">
                    <CaptionSide />
                </Col>
                <Col xs={11} md={6} className="mx-auto">
                    <ConcernTxtBox title="Concern"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Concern;