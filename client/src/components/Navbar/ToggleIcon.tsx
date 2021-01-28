import React from 'react';

interface Props {
    children: object,
    isToggled: boolean,
    setToggled: (toggle: boolean) => any
}

function ToggleIcon({ children, isToggled, setToggled }:Props) {

    return (
        <>
        <div 
        className="toggle-icon"
        onClick={() => setToggled(!isToggled)}
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