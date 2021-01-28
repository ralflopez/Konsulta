import React from 'react';
import ConcernTxtBox from '../Landing/Concern/_ConcernTxtBox';

function ChatBox() {
    return (
        <div className="chat-container h-100 pl-3 pr-3">
            <div className="w-100 chat-bubbles-container">
                        <div className="chat-horizontal-container me">
                            <div className="mr-1 chat-bubble">ddsfsdfsdfsdfdfdsfsfsfsfdsfdfdsffdscdsfdf</div>
                        </div>
                        <div className="chat-horizontal-container">
                            <div className="mr-1 chat-bubble">ddsfsddsfsdff</div>
                        </div>
                        <div className="chat-horizontal-container me">
                            <div className="mr-1 chat-bubble">ddsfsdfsfdsdf</div>
                        </div>
                        <div className="chat-horizontal-container">
                            <div className="mr-1 chat-bubble">ddsfsdfsdfsdf</div>
                        </div>
                        <div className="chat-horizontal-container">
                            <div className="mr-1 chat-bubble">ddssdfsfsdfdsfsdfsdfsdf</div>
                        </div>
                        <div className="chat-horizontal-container">
                            <div className="mr-1 chat-bubble">ddssdfsfsdfdsfsdfsdfsdf</div>
                        </div>
                        <div className="chat-horizontal-container">
                            <div className="mr-1 chat-bubble">ddssdfsfsdfdsfsdfsdfsdfddssdfsfsdfdsfsdfsdfsdfddssdfsfsdfdsfsdfsdfsdfddssdfsfsdfdsfsdfsdfsdfddssdfsfsdfdsfsdfsdfsdfddssdfsfsdfdsfsdfsdfsdfddssdfsfsdfdsfsdfsdfsdfddssdfsfsdfdsfsdfsdfsdfddssdfsfsdfdsfsdfsdfsdfddssdfsfsdfdsfsdfsdfsdfddssdfsfsdfdsfsdfsdfsdfddssdfsfsdfdsfsdfsdfsdfddssdfsfsdfdsfsdfsdfsdfddssdfsfsdfdsfsdfsdfsdf</div>
                        </div>
                        <div className="chat-horizontal-container">
                            <div className="mr-1 chat-bubble">ddssdfsfsdfdsfsdfsdfsdf</div>
                        </div>
            </div>
            <ConcernTxtBox resizable={false} rows={2} paddingTop={0} placeholder="Enter message"/>
        </div>
    );
}

export default ChatBox;