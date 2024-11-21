import React, { useContext, useEffect, useState } from 'react';
import './Feedbacks.css'
import { feedbacksEn, feedbacksRu } from '../../../data';
import { useLocation } from 'react-router-dom';
import { languageContext } from '../../App';
export const Feedbacks = React.memo(() => {

    const [visibleCount, setVisibleCount] = useState(4);
    const location = useLocation()
    const { language } = useContext(languageContext)

    const feedbackData = language == 'ru' ? feedbacksRu : feedbacksEn

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);


    return (
        <section className='feedbacks' id='feedbacks'>
            <div className="container-original">
                <h2 className='title-top'>
                    {
                        language == 'ru'
                            ? 'Отзывы'
                            : 'Feedbacks'
                    }

                </h2>
                <div className="feedbacks__inner">
                    {feedbackData.slice(0, visibleCount).map(feedback => (
                        <article className='feedbacks__card' key={feedback.id}>
                            <h3>{feedback.client_name}</h3>
                            <p>{feedback.feedback}</p>
                        </article>
                    ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {
                        visibleCount == feedbackData.length
                            ? <button className='btn' onClick={() => setVisibleCount(4)}>
                                {
                                    language == 'ru'
                                        ? 'Скрыть'
                                        : 'Hide'
                                }
                            </button>
                            : <button className='btn' onClick={() => setVisibleCount(prev => prev + 4)}>
                                {
                                    language == 'ru'
                                        ? 'Еще'
                                        : 'More'
                                }
                            </button>
                    }

                </div>
            </div>
        </section >
    );
})
