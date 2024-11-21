import React, { useContext } from 'react';
import './PricesArticle.css'
import { myContext } from '../../pages/prices/Prices';
import { languageContext } from '../../../App';

export const PricesArticle = ({ card }) => {

    const { language } = useContext(languageContext)
    const getOrderedElement = useContext(myContext)

    return (
        <article className='price-card'>
            <div className="price-card__top">
                <div className="text">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                </div>
                <div className="price-card__prices">
                    <p className='price'>{card.price}</p>
                    <div className="time">{card.time}</div>
                </div>
            </div>
            <div className="price-card__checks">
                <div className="checks">
                    {card.checks.map(check => {
                        const key = check + Math.random()
                        return <span key={key} className='check'>{check}</span>
                    })}
                </div>
                <button className='btn' onClick={() => getOrderedElement(card)}>
                    {
                        language == 'ru'
                            ? 'Заказать'
                            : 'Order'
                    }

                </button>
            </div>
        </article >
    );
}
