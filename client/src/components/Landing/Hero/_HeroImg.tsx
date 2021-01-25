import React from 'react';
import heroImg from '../../../assets/hero-img.svg';

function _HeroImg() {
    return (
        <div className="w-100">
            <img src={heroImg} className="w-100 hero-img"/>
        </div>
    );
}

export default _HeroImg;