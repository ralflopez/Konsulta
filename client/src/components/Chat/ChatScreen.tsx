import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChatLeft from './_ChatLeft';
import ChatSection from './_ChatSection';

function ChatScreen() {
    let [screen, setScreen] = useState('chat');

    return (
        <Container fluid className="hw-100v">
            <Row className="h-100">
                <Col md={3} className="d-none d-md-flex justify-content-center p-navbar bg-primary">
                    <ChatLeft screen={screen} setScreen={setScreen}/>
                </Col>
                <Col xs={12} md={7} className="text-center p-navbar mx-auto h-100">
                   {
                       screen === 'chat' && (<ChatSection />)
                   }
                </Col>
            </Row>
        </Container>
    );
}

export default ChatScreen;