import React, { useContext } from 'react';
import './Social.css'
import { faSquareInstagram, faYoutube, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { languageContext } from '../../App';

export const Social = React.memo(() => {
    const { language } = useContext(languageContext)
    return (
        <section className='social-media' id='contacts'>
            <div className="container-original">
                <h2 className='title-top'>
                    {
                        language == 'ru'
                            ? 'Контакты'
                            : 'Contacts'
                    }
                </h2>
                <div className="social-media__inner">
                    <div className="links">
                        <a href="tel:79521144283" className='tel'>+7 (952) 114-42-83</a>
                        <a href="mailto:vcdevs@mail.ru" className="email">vcdevs@mail.ru</a>
                    </div>
                    <h3 className='subtitle'>
                        {
                            language == 'ru'
                                ? 'Следите за нами в социальных сетях'
                                : 'Follow us on social media'
                        }
                    </h3>
                    <div className="icons">
                        <a href="https://vk.com/vincentochangretta" target='_blank'><FontAwesomeIcon icon={faVk} /></a>
                        <a href="" target='_blank'><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href="https://t.me/vincentochangretta" target='_blank'><FontAwesomeIcon icon={faTelegram} /></a>
                        <a href="https://www.instagram.com/vcdevelopers?igsh=MWswZ3NoNm1jMW54aw==" target='_blank'><FontAwesomeIcon icon={faSquareInstagram} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
})
