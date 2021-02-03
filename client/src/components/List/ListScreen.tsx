import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from './_Card';

function ListPage() {
    return (
        <Container className="p-navbar">
            <Row>
                <Col>
                    <Card title="This clinic" caption="your md"/>
                </Col>
                <Col>
                    <Card title="This clinisdfsdfsfc" caption="your mdsdfs  your mdsdfsdfddsfsdfdsf dsfsfsdfsfsdfdf dfdsfsdfdf your mdsdfssdff  fdds dfdsfsdfdf"/>
                </Col>
            </Row>
        </Container>
    );
}

export default ListPage;