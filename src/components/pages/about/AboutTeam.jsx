import React, { useContext } from 'react';
import './AboutTeam.css'
import { teamAlisa, teamAram, teamVito } from '../../../../imgData';
import { OrderButtons } from '../../UI/OrderButtons';
import { languageContext } from '../../../App';

export const AboutTeam = () => {
    const { language } = useContext(languageContext)
    return (
        <section className='about-team'>
            <div className="container-original">
                <h2 className='title-top'>
                    {
                        language == 'ru'
                            ? 'Наша команда'
                            : 'Meet our team'
                    }

                </h2>
                <h3 className='subtitle'>
                    {
                        language == 'ru'
                            ? 'Правильная команда — залог успеха: мы вдохновляем друг друга, достигаем большего и воплощаем мечты в реальность.'
                            : 'The right team is the key to success: we inspire each other, achieve more and embody dreams into reality.'
                    }
                </h3>
                <div className="about-team__inner">
                    <article className='about-team__card'>
                        <div className='img'>
                            <img src={teamAram} alt="Team Aram" />
                        </div>
                        <h3>Aram Papikyan</h3>
                        <p>Frontend developer</p>
                    </article>
                    <article className='about-team__card'>
                        <div className='img'>
                            <img src={teamAlisa} alt="Team Aram" />
                        </div>
                        <h3>Alisa Fedotova</h3>
                        <p>UI/UX designer</p>
                    </article>
                    <article className='about-team__card'>
                        <div className='img'>
                            <img src={teamVito} alt="Team Aram" />
                        </div>
                        <h3>Vincento Changretta</h3>
                        <p>Fullstack developer</p>
                    </article>
                </div>
                <OrderButtons className='about-team__inner-buttons' />
            </div>
        </section>
    );
}
