import React, { useContext, useEffect, useRef, useState } from 'react';
import './AboutWorkSlider.css';
import { howWeWorkData, howWeWorkDataRU } from '../../../../../data';
import { languageContext } from '../../../../App';

export const AboutWorkSlider = () => {
    const [translate, setTranslate] = useState(0);
    const sliderItemWidth = useRef(null);
    const sliderMyInnerWidth = useRef(null);
    const [MyInnerWidth, setMyInnerWidth] = useState(0);
    const [adaptiveWidth, setAdaptiveWidth] = useState(0);
    const { language } = useContext(languageContext);
    const workData = language === 'ru' ? howWeWorkDataRU : howWeWorkData;
    let sliderCardQuantity = MyInnerWidth > 850 ? 3 : 1

    useEffect(() => {
        const updateDimensions = () => {
            if (sliderMyInnerWidth.current) {
                setMyInnerWidth(sliderMyInnerWidth.current.offsetWidth);
            }
            
            setAdaptiveWidth(MyInnerWidth / sliderCardQuantity);
        };
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [MyInnerWidth, workData.length]);

    const handleSliderChange = boolean => {
        if (boolean) {
            if (Math.abs(translate) < adaptiveWidth) {
                console.log(translate)
                setTranslate(20)
                setTimeout(() => setTranslate(0), 200);
            } else {
                setTranslate(prev => prev + adaptiveWidth)
            }
        } else {
            console.log(Math.abs(translate) + MyInnerWidth - 10)

            if (Math.abs(translate) + MyInnerWidth - 10 > adaptiveWidth * (workData.length - 1)) {
                setTranslate(prev => prev - 20)
                setTimeout(() => {
                    setTranslate(translate)
                }, 200);
            } else {
                setTranslate(prev => prev - adaptiveWidth)
            }
        }
    }

    return (
        <div className='about-work__slider'>
            <div className="box">
                <div className="box-buttons">
                    <span className='prev' onClick={() => handleSliderChange(true)}>&#10094;</span>
                    <span className='next' onClick={() => handleSliderChange(false)}>&#10095;</span>
                </div>
            </div>
            <div ref={sliderMyInnerWidth} className='about-work__slider-box'>
                <div className="about-work__slide-inner" style={{ translate: `${translate + 'px'} 0` }}>
                    {workData.map((item, index) => {
                        const key = item.id + Math.random()
                        return <article
                            ref={index == 0 ? sliderItemWidth : null}
                            className='about-work__slider-card'
                            style={{ maxWidth: adaptiveWidth }}
                            key={key}
                        >
                            0{index + 1}
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </article>
                    })}
                </div>
            </div>
        </div>
    );
}
