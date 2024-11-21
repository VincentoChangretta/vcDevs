import React from 'react';
import './Preloader.css'

export const Preloader = ({ opacity }) => {
    return (
        <div className='preloader' style={opacity ? { opacity: 0 } : null}>
            <div className="loader">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
        </div>
    );
}
