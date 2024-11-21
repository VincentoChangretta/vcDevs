import React, { useState } from 'react';
import './AboutInfoCard.css'
import { Link } from 'react-router-dom';

export const AboutInfoCard = ({ activeEl, animation, language }) => {

    let activeElClass = ['about-info__card-img']
    if (activeEl.id == 'sites') {
        activeElClass.push('sites')
    } else if (activeEl.id == 'apps'){
        activeElClass.push('apps')
    } else if(activeEl.id == 'games'){
        activeElClass.push('games')
    }

        return (
            <div className='about-info__card' style={animation} >
                <div className="text" >
                    <h3 className='title'>{activeEl.title}</h3>
                    <h4>— {activeEl.description}</h4>
                    <p>{activeEl.text}</p>
                    <Link to={activeEl.link} className='btn'>{language == 'ru' ? 'Подробнее' : 'Read more'}</Link>
                </div>
                <div className={activeElClass.join(' ')} >
                    <img src={activeEl.img} alt={activeEl.imgAlt} />
                </div>
            </div>
        );
}
