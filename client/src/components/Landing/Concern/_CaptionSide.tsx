import React from 'react';
import chat1 from '../../../assets/chat-1.svg';

function _CaptionSide() {
    return (
        <div>
            <h2 className="text-primary concern-title">What's your concern?</h2>
            <p className="concern-caption">Live chat with a professional</p>
            <img src={chat1} alt="chat icon" className="concern-icon-lg d-none d-md-block"/>
        </div>
    );
}

export default _CaptionSide;