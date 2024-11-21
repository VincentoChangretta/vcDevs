import React, { useContext } from 'react';
import './PrivacyPolicy.css'
import { languageContext } from '../../../App';
import { privacyPolicyData, privacyPolicyDataEn } from '../../../../data';

export const PrivacyPolicy = () => {

    const { language } = useContext(languageContext)
    const privacyArr = language == 'ru' ? privacyPolicyData : privacyPolicyDataEn

    return (
        <section className='privacy-policy'>
            <div className="container-original">
                <div className="privacy-policy__inner">
                    {
                        privacyArr.map(item => {
                            const key = item.slice(10, 15) + Math.random()
                            return <p key={key}>{item}</p>
                        })
                    }
                </div>
            </div>
        </section>
    );
}
