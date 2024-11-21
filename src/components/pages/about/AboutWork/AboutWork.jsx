import React, { useContext } from 'react';
import './AboutWork.css'
import { AboutWorkSlider } from './AboutWorkSlider';
import { languageContext } from '../../../../App';

export const AboutWork = React.memo(() => {
    const { language } = useContext(languageContext)
    return (
        <section className='about-work'>
            <div className="container-original">
                <h2 className='title-top about-work__title'>
                    {
                        language == 'ru'
                            ? 'Как мы работаем'
                            : 'How we work'
                    }
                </h2>
                <div className="about-work__inner">
                    <AboutWorkSlider />
                </div>
            </div>
        </section>
    );
})
