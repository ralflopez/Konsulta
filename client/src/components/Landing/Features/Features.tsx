import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Title from './_Title';
import FeatureCard from './_FeatureCard';

import nearbyFront from '../../../assets/nearby-1.svg';
import nearbyBack from '../../../assets/nearby-2.svg';
import chatFront from '../../../assets/chat-1.svg';
import chatBack from '../../../assets/chat-2.svg';
import calendarFront from '../../../assets/calendar-1.svg';
import calendarBack from '../../../assets/calendar-2.svg';

function Features() {
    return (
        <Container className="h-100v d-flex justify-content-center align-items-center">
            <Row className="w-100 d-flex justify-content-between ox-hidden">
                {/* <div style={{width: '1200px', height: '200px', backgroundColor: 'tomato'}}></div> */}
                <Col xs={12}>
                    <Title />
                </Col>
                <Col xs={12} md={3}>
                    <FeatureCard front={nearbyFront} back={nearbyBack} caption="Find nearby doctors"/>
                </Col>
                <Col xs={12} md={3}>
                    <FeatureCard front={chatFront} back={chatBack} caption="Live chat with a professional"/>
                </Col>
                <Col xs={12} md={3}>
                    <FeatureCard front={calendarFront} back={calendarBack} caption="Book an appointment"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Features;