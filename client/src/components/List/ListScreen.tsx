import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from './_Card';

function ListPage() {
    return (
        <Container className="p-navbar">
            <Row>
                <Col xs={12} md={2} className="mb-3">
                    <div className="br-50 bg-primary w-100 p-3 mb-2">
                        <h6 className="text-white text-center ">Chat with out customer service for fast and convinience</h6>
                    </div>
                        <Button>Start a live chat</Button>
                </Col>
                <Col className="text-center text-md-left">
                    <h4 className="text-primary">Facilities</h4>
                    <Card title="This clinic" caption="your md"/>
                    <Card title="This clinisdfsdfsfc" caption="your mdsdfs  your mdsdfsdfddsfsdfdsf dsfsfsdfsfsdfdf dfdsfsdfdf your mdsdfssdff  fdds dfdsfsdfdf"/>
                    <Card title="This clinisdfsdfsfc" caption="your mdsdfs  your mdsdfsdfddsfsdfdsf dsfsfsdfsfsdfdf dfdsfsdfdf your mdsdfssdff  fdds dfdsfsdfdf"/>
                </Col>
            </Row>
        </Container>
    );
}

export default ListPage;