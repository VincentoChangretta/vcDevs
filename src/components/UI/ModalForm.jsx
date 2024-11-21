import React, { useContext, useRef, useState } from 'react';
import './ModalForm.css'
import { Input } from './Input';
import { InputSelect } from './InputSelect';
import { inputSelectArr } from '../../../data';
import { HiddenInputs } from '../global/HiddenInputs';
import { handleSubmit } from '../../../script';
import { SubmitBtn } from './SubmitBtn';
import { fetchModalContext } from '../../App';
import { Privacy } from '../global/Privacy';

export const ModalForm = ({ card, setModalActive }) => {
    const [placeholder, setPlaceholder] = useState(inputSelectArr[0].placeholder)
    const [inputName, setInputName] = useState(inputSelectArr[0].id)
    const [inputType, setInputType] = useState("number")
    const formRef = useRef(null)
    const [submitBtn, setSubmitBtn] = useState(false)
    const { setFetchModal } = useContext(fetchModalContext)

    const setNewPlaceholder = item => {
        item.id === "telephone" ? setInputType("number") : setInputType("text")
        setPlaceholder(item.placeholder)
        setInputName(item.id)
    }
    const closeModal = e => {
        if (e.target.classList.contains('modal-form-bg')) {
            setModalActive(false);
        }
    }

    return (
        <div className='modal-form-bg' onMouseUp={closeModal}>
            <div className="modal-form" >
                <article>
                    <h2>{card.title}</h2>
                    <p>{card.text}</p>
                    <div className="checks">
                        {card.checks.map(item => {
                            const key = item + Math.random()
                            return <span key={key} className='check'>{item}</span>
                        })}
                    </div>
                    <p className="price">{card.price}</p>
                    <div className="time">{card.time}</div>
                </article>
                <form
                    ref={formRef}
                    onSubmit={e => handleSubmit(e, formRef.current, setSubmitBtn, setFetchModal)}
                    className='modal-form__form'
                    method='post'
                    action=''
                >
                    <HiddenInputs />
                    <input className='hidden-service-id-input' name="service" value={card.id} onChange={() => card.id} />
                    <Input name="name" type="text" placeholder='Name' />
                    <div className='choise-input'>
                        <Input name={inputName} childrenToTop={true} type={inputType} className='input-choise' placeholder={placeholder}>
                            <InputSelect setNewPlaceholder={setNewPlaceholder} />
                        </Input>
                    </div>
                    <SubmitBtn submitBtn={submitBtn} />
                    <Privacy />
                </form>

                <div className="close" onClick={() => setModalActive(false)}>&#10006;</div>
            </div >
        </div >
    );
}
