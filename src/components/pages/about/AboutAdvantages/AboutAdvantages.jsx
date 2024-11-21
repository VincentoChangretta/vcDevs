import React, { useContext } from 'react';
import './AboutAdvantages.css'
import { advatnagesData, advatnagesDataRU } from '../../../../../data';
import { languageContext } from '../../../../App';

export const AboutAdvantages = () => {

    const { language } = useContext(languageContext)
    const data = language == 'ru' ? advatnagesDataRU : advatnagesData

    return (
        <section className='about-advantages'>
            <div className="container-original">
                <h2 className='title-top'>{language == 'ru' ? 'Наши преимущества' : 'Our advantages'}</h2>
                <div className="about-advantages__inner">
                    {data.map(item => (
                        <div key={item.id} className='about-advantages__inner-item'>
                            <p className='num'>0{item.id}</p>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
