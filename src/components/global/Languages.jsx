import React, { useContext } from 'react';
import './Languages.css'
import { languageContext } from '../../App';

export const Languages = ({ header }) => {

    const { language, setLanguage } = useContext(languageContext)

    return (
        <ul className={header ? 'languages header__languages' : 'languages'}>
            <li className={language == 'ru' ? 'active' : null} onClick={() => setLanguage('ru')}>RU</li>
            <li className={language == 'en' ? 'active' : null} onClick={() => setLanguage('en')}>EN</li>
        </ul>
    );
}
