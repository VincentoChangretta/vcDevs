import React from 'react';
import './AboutInfoCardSlider.css'

export const AboutInfoCardSlider = ({ serviceData, activeEl, setActiveEl, index, handleChangeActive, setAnimation }) => {
    const handleOperation = (boolean, data) => {
        if (boolean) {
            index.current = index.current == serviceData.length - 1 ? 0 : index.current += 1
        } else {
            index.current = index.current == 0 ? serviceData.length - 1 : index.current -= 1
        }
        setAnimation({ opacity: .5, translate: '0 30px' })
        setTimeout(() => {
            setActiveEl(data[index.current])
            setAnimation({ opacity: 1, translate: '0 0' })
        }, 500);
    }
    return (
        <ul className='about-info__slider-list'>
            <li className='arrows'
                onClick={() => handleOperation(true, serviceData)}
            >
                &#10095;
            </li>
            {serviceData.map((item, index) => (
                <li
                    key={item.id}
                    onClick={() => handleChangeActive(item)}
                    className={activeEl.id == item.id ? 'active' : null}>
                    0{index + 1}
                </li>
            ))}
            <li className='arrows'
                onClick={() => handleOperation(false, serviceData)}
            >
                &#10095;
            </li>
        </ul >
    );
}
