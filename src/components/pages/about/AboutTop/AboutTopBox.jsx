import React from 'react';
import './AboutTopBox.css'
import { TextSlider } from '../../../UI/TextSlider';

export const AboutTopBox = () => {
    return (
        <div className="about-top__box">
            <div className="container">
                <div className="about-top__main-inner">
                    <TextSlider />
                </div>
            </div>
        </div>
    );
}
