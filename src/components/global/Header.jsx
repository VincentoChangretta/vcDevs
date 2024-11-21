import React, { useContext, useEffect, useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { languageContext } from '../../App';
import { Languages } from './Languages';

export const Header = ({ logo }) => {

    const { language, setLanguage } = useContext(languageContext)
    const [windowWidth, setWindowWidth] = useState(innerWidth)
    const [burger, setBurger] = useState(false)
    const [activeBar, setActiveBar] = useState(false)
    windowWidth <= 1050 ? logo = true : null

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        if (windowWidth <= 870 && !burger) {
            setBurger(true);
        } else if (windowWidth > 870 && burger) {
            setBurger(false);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth, burger]);

    useEffect(() => {
        document.body.style.overflow = activeBar ? 'hidden' : 'auto';
    }, [activeBar]);

    return (
        <header className='header'>
            <div className={logo ? 'container-original' : 'container'}>
                <div className={logo ? 'header__inner header__inner-all' : 'header__inner'}>
                    {logo && <Link to='/' className='logo'>vcDevs</Link>}
                    <nav className={activeBar ? 'active' : null}>
                        <ul>
                            <li className='nav-item'>
                                <Link to='/' onClick={() => setActiveBar(false)}>{language == 'ru' ? 'О нас' : 'About'}</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/prices' onClick={() => setActiveBar(false)}>{language == 'ru' ? 'Цены' : 'Prices'}</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='#feedbacks' onClick={() => setActiveBar(false)}>{language == 'ru' ? 'Отзывы' : 'Feedbacks'}</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='#contacts' onClick={() => setActiveBar(false)}>{language == 'ru' ? 'Контакты' : 'Contacts'}</Link>
                            </li>
                        </ul>
                        {logo ? <Languages header={true} /> : null}
                    </nav>
                    {burger ?
                        <>
                            <div
                                className={activeBar ? 'nav-inner active' : 'nav__inner'}
                                onClick={() => setActiveBar(false)}
                            >
                            </div>
                            <div
                                className={activeBar ? 'burger active' : 'burger'}
                                onClick={() => activeBar ? setActiveBar(false) : setActiveBar(true)}
                            >
                                {activeBar ? '✖' : '☰'}
                            </div>
                        </>
                        : null}
                </div>
            </div>
        </header>
    );
}
