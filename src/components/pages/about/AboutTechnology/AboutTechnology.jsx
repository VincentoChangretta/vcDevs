import React, { useContext } from 'react';
import './AboutTechnology.css'
import { Tools } from '../../../UI/Tools';
import { languageContext } from '../../../../App';


export const AboutTechnology = React.memo(() => {

    const { language } = useContext(languageContext)
    return (
        <section className='about-technology'>
            <div className="container-original">
                <h2 className='title-top'>
                    {
                        language == 'ru'
                            ? 'Что мы используем в работе'
                            : 'What we use in work'
                    }

                </h2>
                <div className="about-technology__inner">
                    <Tools />
                    <div className="tools-names">
                        <div className='tools-names__box first'>
                            <ul>
                                <li>
                                    <h3>Frontend:</h3>
                                </li>
                                <li>- HTML</li>
                                <li>- CSS</li>
                                <li>- Sass</li>
                                <li>- jQuery</li>
                                <li>- JavaScript</li>
                                <li>- TypeScript</li>
                                <li>- React</li>
                                <li>- Redux</li>
                            </ul>
                            <ul>
                                <li>
                                    <h3>Backend:</h3>
                                </li>
                                <li>- Node js</li>
                                <li>- Express js</li>
                                <li>- PHP</li>
                                <li>- MySQL</li>
                            </ul>
                        </div>
                        <div className='tools-names__box'>
                            <ul>
                                <li>
                                    <h3>Design:</h3>
                                </li>
                                <li>- Figma</li>
                                <li>- Adobe Illustrator</li>
                                <li>- Adobe Photoshop</li>
                            </ul>
                            <ul>
                                <li>
                                    <h3>CMS:</h3>
                                </li>
                                <li>- WordPress</li>
                                <li>- Joomla</li>
                                <li>- Bitrix</li>
                                <li>- OpenCard</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
})
