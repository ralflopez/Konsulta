import React from 'react';
import chat from '../../assets/chat-1.svg';

interface Props {
    screen: string,
    setScreen: (screen: string) => any
}

function ChatTitle({ screen, setScreen }: Props) {
    return (
        <div className="text-center text-white">
            <img src={chat} alt="chat" className="chat-icon-sm"/>
            <h3 className="fw bold text-white mb-4">Youre talking with</h3>
            <h3>Angie</h3>
            <p>Agent (Nurse)</p>
        </div>
    );
}

export default ChatTitle;