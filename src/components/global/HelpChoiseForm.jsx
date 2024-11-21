import React, { useContext, useRef, useState } from 'react';
import './HelpChoiseForm.css'
import { Input } from '../UI/Input';
import { fetchModalContext, languageContext } from '../../App';
import { HiddenInputs } from './HiddenInputs';
import { handleSubmit } from '../../../script';
import { SubmitBtn } from '../UI/SubmitBtn';
import { Privacy } from './Privacy';
export const HelpChoiseForm = () => {
    const { language } = useContext(languageContext)
    const formRef = useRef(null)
    const [submitBtn, setSubmitBtn] = useState(false)
    const { setFetchModal } = useContext(fetchModalContext)

    return (
        <section className='help-to-choise'>
            <div className="container-original">
                <div className="help-to-choise__inner">
                    <div className="box">
                        <h2>
                            {language == 'ru'
                                ? 'Мы готовы помочь с выбором!'
                                : 'We are ready to help with the choice!'
                            }
                        </h2>
                        <p>
                            {language == 'ru'
                                ? 'Наши эксперты подберут самое эффективное решение'
                                : 'Our experts will select the most effective solution'
                            }

                        </p>
                        <form
                            ref={formRef}
                            onSubmit={e => handleSubmit(e, formRef.current, setSubmitBtn, setFetchModal)}
                            className='help-to-choise__form'
                            method='post'
                            action=''
                        >
                            <HiddenInputs />
                            <Input
                                name="number"
                                type="number"
                                className='help-to-choise__input'
                                placeholder={language == 'ru' ? 'Номер телефона' : 'Phone number'}>
                                <SubmitBtn submitBtn={submitBtn} />
                            </Input>
                        </form>
                        <Privacy />

                    </div>
                </div>
            </div>
        </section>
    );
}
