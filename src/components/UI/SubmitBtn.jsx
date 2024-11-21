import React, { useContext } from 'react';
import './SubmitBtn.css'
import { languageContext } from '../../App';

export const SubmitBtn = ({ submitBtn }) => {
    const { language } = useContext(languageContext)
    return (
        <button className={submitBtn ? 'btn submit active' : 'btn submit'} type='submit'>
            {
                language == 'ru'
                    ? 'Отправить'
                    : 'Send'
            }
        </button>
    );
}
