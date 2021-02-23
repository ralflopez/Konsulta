import React from 'react';
import { Button, Card } from 'react-bootstrap';
import sample from '../../assets/sample.jpg';

interface Props {
    title: string,
    caption: string,
    img?: string
}

function _Card({title, caption}: Props) {
    return (
        <Card style={{width: '100%', maxWidth: '17rem'}} className="m-3 d-inline-block">
        <Card.Img variant="top" src={sample} />
            <Card.Body>
                <Card.Title style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{title}</Card.Title>
                <Card.Text style={
                    {
                        height: '4.6rem', 
                        fontSize: '0.8em',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                    }
                    }>
                { caption }
                </Card.Text>
                <Button variant="primary">Visit</Button>
            </Card.Body>
        </Card>
    );
}

export default _Card;