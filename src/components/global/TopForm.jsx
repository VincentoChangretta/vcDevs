import React, { useContext, useRef, useState } from 'react';
import './TopForm.css'
import { Input } from '../UI/Input';
import { InputSelect } from '../UI/InputSelect';
import { inputSelectArr } from '../../../data';
import { fetchModalContext, languageContext } from '../../App';
import { Privacy } from './Privacy';
import { HiddenInputs } from './HiddenInputs';
import { handleSubmit } from '../../../script';
import { SubmitBtn } from '../UI/SubmitBtn';

export const TopForm = ({ closeBtn, setModalActive }) => {

    const { language } = useContext(languageContext)
    const [placeholder, setPlaceholder] = useState(inputSelectArr[0].placeholder)
    const [inputType, setInputType] = useState("number")
    const [name, setName] = useState(inputSelectArr[0].id)
    const formRef = useRef(null)
    const [submitBtn, setSubmitBtn] = useState(false)
    const { setFetchModal } = useContext(fetchModalContext)

    const setNewPlaceholder = item => {
        item.id === "telephone" ? setInputType("number") : setInputType("text")
        setPlaceholder(item.placeholder)
        setName(item.id)
    }

    return (
        <form
            ref={formRef}
            onSubmit={e => handleSubmit(e, formRef.current, setSubmitBtn, setFetchModal)}
            className='top-form'
            method='post'
            action=''
        >
            <h3>
                {
                    language == 'ru'
                        ? 'Обсудить проект'
                        : 'Discuss the project'
                }
            </h3>
            <HiddenInputs />
            <Input name='name' type="text" placeholder={language == 'ru' ? 'Имя' : 'Name'} />
            <div className='choise-input'>
                <Input
                    name={name}
                    childrenToTop={true}
                    type={inputType}
                    className='input-choise'
                    placeholder={placeholder}
                >
                    <InputSelect setNewPlaceholder={setNewPlaceholder} />
                </Input>
            </div>
            <SubmitBtn submitBtn={submitBtn} />
            <Privacy />
            {closeBtn && <div className="close-modal-btn" onClick={() => setModalActive(false)}>✖</div>}
        </form>
    );
}
