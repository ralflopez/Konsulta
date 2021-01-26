import React from 'react';
import { Button, Form } from 'react-bootstrap';

function _ConcernTxtBox() {
    return (
        <div className="text-right pt-md-5">
            <h4 className="text-left text-primary d-none d-md-block">Concern</h4>
            <Form>
                <Form.Group>
                    <Form.Control as="textarea" rows={5} className="bg-secondary p-3 concern-txt-box"/>
                </Form.Group>
                <Button variant="primary">Send</Button>
            </Form>
        </div>
    );
}

export default _ConcernTxtBox;