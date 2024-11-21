import React, { useContext, useEffect, useRef, useState } from 'react';
import './AboutInfo.css'
import { AboutInfoCard } from './AboutInfoCard';
import { AboutInfoCardSlider } from './AboutInfoCardSlider';
import { aboutServiceData, aboutServiceDataRU } from '../../../../../data';
import { languageContext } from '../../../../App';

export const AboutInfo = () => {
    const index = useRef(0)
    const { language } = useContext(languageContext)
    const serviceData = language == 'ru' ? aboutServiceDataRU : aboutServiceData
    const [activeEl, setActiveEl] = useState(serviceData[index.current])
    const [animation, setAnimation] = useState({ opacity: 1, translate: '0 0' })

    useEffect(() => {
        setActiveEl(serviceData[0]); // Обновляем activeEl при смене языка
        index.current = 0; // Сбрасываем индекс
    }, [serviceData]);
    
    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setAnimation({ opacity: .5, translate: '0 30px' })
            setTimeout(() => {
                index.current++
                index.current == serviceData.length ? index.current = 0 : null
                setActiveEl(serviceData[index.current])
                setAnimation({ opacity: 2, translate: '0 0px' })
            }, 500);
        }, 7000)
        return () => clearInterval(sliderInterval)
    }, [serviceData])


    const handleChangeActive = item => {
        setAnimation({ opacity: .5, translate: '0 30px' })
        setTimeout(() => {
            setActiveEl(item)
            index.current = serviceData.findIndex(element => element.id == item.id)
            setAnimation({ opacity: 1, translate: '0 0' })
        }, 500);
    }

    return (
        <section className='about-info'>
            <div className="container-original">
                <div className="about-info__inner">
                    <h2 className='title-top'>{language == 'ru' ? 'Услуги' : 'Services'}</h2>
                    <div className="about-info__inner-box">
                        <AboutInfoCardSlider
                            serviceData={serviceData}
                            activeEl={activeEl}
                            setActiveEl={setActiveEl}
                            index={index}
                            handleChangeActive={handleChangeActive}
                            setAnimation={setAnimation}
                        />
                        <AboutInfoCard
                            activeEl={activeEl}
                            animation={animation}
                            language={language}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
