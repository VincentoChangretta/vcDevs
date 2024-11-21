import React, { useContext, useEffect, useRef, useState } from 'react';
import classes from './TextSlider.module.css';
import { languageContext } from '../../App';
import { sliderListArr, sliderListArrRU } from '../../../data';


export const TextSlider = () => {
    const [indexSl, setIndexSl] = useState(0);
    const [sliderMove, setSliderMove] = useState(0)
    const firstSliderText = useRef(null)
    const sliderInterval = useRef(null)
    const { language } = useContext(languageContext)

    const sliderArr = language == 'ru' ? sliderListArrRU : sliderListArr

    useEffect(() => {
        let height
        if (firstSliderText.current) {
            height = firstSliderText.current.getBoundingClientRect().height
        }

        const startSliderInterval = () => {
            sliderInterval.current = setInterval(() => {
                setIndexSl(prev => {
                    const nextIndex = (prev + 1) % sliderArr.length
                    if (nextIndex == sliderArr.length - 1) {
                        clearInterval(sliderInterval.current)
                        setTimeout(() => {
                            startSliderInterval()
                        }, 7000);
                    }
                    return nextIndex
                });
                setSliderMove(prev => {
                    if (Math.abs(prev) >= height * (sliderArr.length - 1)) {
                        return 0;
                    }
                    return prev - height;
                })
            }, 2500);
        }

        startSliderInterval()
        return () => clearInterval(sliderInterval.current);
    }, []);

    return (
        <div className={classes['slider-text']}>
            <h2>{language == 'ru' ? 'Мы - это' : 'We are'}</h2>
            <div className={classes['slider-container']}>
                <ul className={classes['slider-list']} style={{ translate: `0 ${sliderMove + 'px'}` }}>
                    {sliderArr.map((item, index) => (
                        <li
                            key={index}
                            ref={index == 0 ? firstSliderText : null}
                            className={item == 'vcDevs' ? classes.vcDevs : null}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <p className={indexSl == sliderArr.length - 1 ? classes.active : null}>
                {language == 'ru'
                    ? 'Твой партнер и творец цифровых миров!'
                    : 'Our partner and creator of digital worlds!'
                }
            </p>
        </div>
    );
};