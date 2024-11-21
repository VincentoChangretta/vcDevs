import React, { createContext, useCallback, useContext, useState } from 'react';
import './Prices.css'
import { PricesTop } from './PricesTop';
import { AboutAdvantages } from '../about/AboutAdvantages/AboutAdvantages';
import { appsPriceCardsData, appsPriceCardsDataRU, gamesPriceCardsData, gamesPriceCardsDataRU, reworkPriceCardsData, reworkPriceCardsDataRU, websitesPriceCardsData, websitesPriceCardsDataRU } from '../../../../data';
import { AboutTechnology } from '../about/AboutTechnology/AboutTechnology';
import { AboutWork } from '../about/AboutWork/AboutWork';
import { PricesBox } from '../../global/Prices/PricesBox'
import { Feedbacks } from '../../global/Feedbacks';
import { Social } from '../../global/Social';
import { ModalForm } from '../../UI/ModalForm';
import { languageContext } from '../../../App';

export const myContext = createContext('no context')

export const Prices = React.memo(() => {
    const { language } = useContext(languageContext)
    const [modalActive, setModalActive] = useState(null)
    const [orderedEl, setOrderedEl] = useState(null)

    const getOrderedElement = useCallback((element) => {
        setOrderedEl(element)
        setModalActive(true)
    }, [])


    return (
        <>
            <PricesTop />
            <AboutAdvantages />
            <myContext.Provider value={getOrderedElement}>
                <PricesBox
                    id='sites'
                    data={language == 'ru' ? websitesPriceCardsDataRU : websitesPriceCardsData}
                    title={language == 'ru' ? 'Сайты' : 'Website'}
                />
                <PricesBox
                    id='apps'
                    data={language == 'ru' ? appsPriceCardsDataRU : appsPriceCardsData}
                    title={language == 'ru' ? 'Приложения' : 'Application'}
                />
                <PricesBox
                    id='games'
                    data={language == 'ru' ? gamesPriceCardsDataRU : gamesPriceCardsData}
                    title={language == 'ru' ? 'Игры' : 'Games'}
                />
                <PricesBox
                    id='rework'
                    data={language == 'ru' ? reworkPriceCardsDataRU : reworkPriceCardsData}
                    title={language == 'ru' ? 'Доработка' : 'Rework'}
                />
            </myContext.Provider>
            <AboutWork />
            <AboutTechnology />
            <Feedbacks />
            <Social />
            {orderedEl && modalActive ? <ModalForm card={orderedEl} setModalActive={setModalActive} /> : null}
        </>
    );
})
