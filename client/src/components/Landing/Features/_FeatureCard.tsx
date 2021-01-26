import React from 'react';

interface Props {
    front: string,
    back: string,
    caption: string
}

function FeatureCard({ front, back, caption }: Props) {
    return (
        <div className="text-center fc-container">
            <div className="fc-img-container">
                <img src={front} alt="illustation1" className="fc-img fc-img-f"/>
                <img src={back} alt="illustation2" className="fc-img fc-img-b"/>
            </div>
            <p className="text-primary">{caption}</p>
        </div>
    );
}

export default FeatureCard;