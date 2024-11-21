import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './OrderButtons.css'
import { languageContext } from '../../App';
import { modalContext } from '../pages/about/About';
export const OrderButtons = ({ className }) => {
    const { language } = useContext(languageContext)
    const { setModalActive } = useContext(modalContext)
    return (
        <div className={className + ' ' + 'order-buttons'}>
            <a
                href="https://t.me/vincentochangretta"
                target='_blank'
                className='btn'>{language == 'ru' ? 'Бесплатная консультация' : 'Free consultation'}

            </a>
            <button
                onClick={() => setModalActive(true)}
                className='btn'>{language == 'ru' ? 'Заказать сайт' : 'Order your website'}
            </button>
        </div>
    );
}
