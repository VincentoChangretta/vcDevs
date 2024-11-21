import React, { createContext, useContext, useState } from 'react';
import './About.css'
import { AboutTop } from './AboutTop/AboutTop';
import { AboutInfo } from './AboutInfo/AboutInfo';
import { AboutWork } from './AboutWork/AboutWork';
import { AboutTechnology } from './AboutTechnology/AboutTechnology';
import { AboutAdvantages } from './AboutAdvantages/AboutAdvantages';
import { HelpChoiseForm } from '../../global/HelpChoiseForm';
import { AboutTeam } from './AboutTeam';
import { Social } from '../../global/Social';
import { Feedbacks } from '../../global/Feedbacks';
import { GlobalModalForm } from '../../UI/GlobalModalForm';

export const modalContext = createContext('no context')

export const About = React.memo(() => {

    const [modalActive, setModalActive] = useState(false)

    return (
        <>
            <modalContext.Provider value={{ modalActive, setModalActive }}>
                <AboutTop />
                <AboutInfo />
                <AboutAdvantages />
                <HelpChoiseForm />
                <AboutTeam />
                <AboutWork />
                <AboutTechnology />
                <Feedbacks />
                <Social />
            </modalContext.Provider>
            {modalActive && <GlobalModalForm setModalActive={setModalActive} />}
        </>
    );
})
