import React, { useContext } from 'react';
import './PricesTop.css'
import { TopForm } from '../../global/TopForm';
import { languageContext } from '../../../App';

export const PricesTop = React.memo(() => {
    const { language } = useContext(languageContext)
    return (
        <section className='service-top'>
            <div className="container-original">
                <div className="service-top__inner">
                    <div className="text">
                        <h1>
                            {
                                language == 'ru'
                                    ? 'Разработка сайтов'
                                    : 'Website development'
                            }

                        </h1>
                        <p>
                            {
                                language == 'ru'
                                    ? 'Закажите создание продающих сайтов под ключ на выгодных условиях! Наша студия предлагает низкие цены и высокое качество проектов различной сложности: сайтов-визиток, интернет-магазинов, корпоративных порталов. Веб-студия vcDevs создала десятки сайтов для коммерческих компаний – воспользуйтесь услугами опытных разработчиков, следующих мировым трендам в области дизайна, программирования, юзабилити и SEO-оптимизации.'
                                    : 'Order the creation of turnkey selling sites on favorable terms! Our studio offers low prices and high quality projects of various complexity: visits, online stores, corporate portals.The VCDEVS web studio has created dozens of sites for commercial companies-use the services of experienced developers following world trends in the field of design, programming, usability and SEO-optimization.'
                            }

                        </p>
                        <div className="checks">
                            <span className='check'>
                                {language == 'ru' ? 'Сроки и качество' : 'Dates and quality'}
                            </span>
                            <span className='check'>
                                {language == 'ru' ? 'Поддержка проектов' : 'Project support'}
                            </span>
                            <span className='check'>
                                {language == 'ru' ? '5 лет на рынке' : '5 years in the market'}
                            </span>
                        </div>
                    </div>
                    <TopForm />
                </div>
            </div>
        </section>
    );
})
