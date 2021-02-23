import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Calendar from './_Calendar';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';

function BookingScreen() {
    let [date, setDate] = useState<Date>(new Date());
    let [time, setTime] = useState('10:00');

    return (
        <>
            <Col xs={12}>
                <h3 className="text-primary mb-2">Appointment</h3>
            </Col>
            <Col xs={12} md={6}>
                <Calendar date={date} setDate={setDate}/>
            </Col>
            <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center pt-5 pt-md-0">
                <div className="mb-5 text-center">
                    <h3 className="text-primary">Time</h3>
                    <TimePicker
                        value={time}
                    />
                </div>
                    <Button color="primary">Make an appointment</Button>
                    <Button variant="primary-outlined" className="mt-3">Contact</Button>
            </Col>
        </>
    );
}

export default BookingScreen;