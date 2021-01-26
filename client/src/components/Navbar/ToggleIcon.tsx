import React, { useState } from 'react';

interface Props {
    children: object
}

function ToggleIcon({ children }:Props) {
    let [isToggled, setToggled] = useState(false);

    return (
        <>
        <div 
        className="toggle-icon"
        onClick={() => setToggled(toggle => !toggle)}
        >
            <div className={`toggle-bar ${isToggled && 't-active'}`}></div>
            <div className={`toggle-bar ${isToggled && 't-active'}`}></div>
            <div className={`toggle-bar ${isToggled && 't-active'}`}></div>
        </div>
        <div className={`toggle-links ${isToggled && 'show'}`}>
            {children}
        </div>
        </>
    );
}

export default ToggleIcon;