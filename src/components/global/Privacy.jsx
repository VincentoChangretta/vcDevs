import React, { useContext } from 'react';
import './Privacy.css'
import { languageContext } from '../../App';
import { Link } from 'react-router-dom';
export const Privacy = () => {
    const { language } = useContext(languageContext)
    return (
        <>
            {
                language == 'ru'
                    ? <p className='privacy-text'>Нажимая на кнопку "Отправить" Вы соглашаетесь с <br />
                        <Link to="/privacypolicy" > политикой обработки персональных данных.</Link>
                    </p>
                    : <p className='privacy-text'>By clicking on the “Send” button, you agree with the <br />
                        <Link to="/privacypolicy" >policy of processing personal data.</Link>
                    </p>
            }
        </>
    );
}
