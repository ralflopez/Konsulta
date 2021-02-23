import React from 'react';
import Calendar from 'react-calendar';

interface Props {
    date: Date,
    setDate: Function
}

function _Calendar({date, setDate}: Props) {

    const onChange = (date: any) => {
        setDate(date)
    }

    return (
        <div>
            <h5>Calendar</h5>
            <Calendar 
            onChange={onChange}
            value={date}
            />
        </div>
    );
}

export default _Calendar;