import React from 'react';
import { Button, Form } from 'react-bootstrap';

interface Props {
    resizable?: boolean,
    rows?: number,
    title?: string,
    paddingTop?: number,
    placeholder?: string
}

function _ConcernTxtBox({ resizable, rows, title, paddingTop, placeholder }: Props) {
    return (
        <div className={`text-right mb-4 pt-md-${paddingTop}`}>
            <h4 className="text-left text-primary d-none d-md-block">{title}</h4>
            <Form>
                <Form.Group>
                    <Form.Control as="textarea" rows={rows} className={`bg-secondary p-3 concern-txt-box ${!resizable && 'resize-none'}`} placeholder={placeholder}/>
                </Form.Group>
                <Button variant="primary">Send</Button>
            </Form>
        </div>
    );
}

_ConcernTxtBox.defaultProps = {
    resizable: 'true',
    rows: 5,
    title: '',
    paddingTop: 5,
    placeholder: ''
};

export default _ConcernTxtBox;