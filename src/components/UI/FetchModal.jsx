import React, { useContext } from 'react';
import './FetchModal.css'
import { languageContext } from '../../App';

export const FetchModal = ({ fetchModal }) => {

    const { language } = useContext(languageContext)
    const classes = ['fetch-modal']

    if (fetchModal.includes('close')) {
        const finded = classes.find(item => item == 'active')
        finded ? classes.splice(classes.indexOf(finded), 1) : null
    } else if (fetchModal !== 'close') {
        classes.push('active')
    }


    return (
        <div className={classes.join(' ')}>
            <div className="text">
                <h2>
                    {fetchModal == 'success' || fetchModal.includes('move')
                        ? language == 'ru'
                            ? 'Благодарим за заявку!'
                            : 'Thank you for the application!'
                        : fetchModal == 'error' || fetchModal.includes('move')
                            ? language == 'ru'
                                ? 'Ошибка отправки. Пожалуйста, попробуйте еще раз'
                                : 'Sending error.Please try again'
                            : null
                    }
                </h2>
                {fetchModal == 'success' || fetchModal.includes('move')
                    ? language == 'ru'
                        ? <p>Мы свяжемся с вами в ближайшее время</p>
                        : <p>We will contact you in the near future</p>
                    : null
                }

            </div>
        </div>
    );
}
