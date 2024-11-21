import React, { useEffect, useRef, useState } from 'react';
import './InputSelect.css'
import { inputSelectArr } from '../../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InputSelect = ({ setNewPlaceholder }) => {

    const [activeEl, setActiveEl] = useState(inputSelectArr[0])
    const [active, setActive] = useState(false)
    const selectRef = useRef(null)

    useEffect(() => {
        const closeSelect = e => selectRef.current && !selectRef.current.contains(e.target)
            ? setActive(false)
            : null
        document.addEventListener('click', closeSelect)
        return () => removeEventListener('click', closeSelect)
    }, [])

    const changeActiveEl = item => {
        setActiveEl(item)
        setActive(prev => !prev)
        setNewPlaceholder(item)
    }

    const handleSetActive = () => {
        setActive(prev => !prev)
    }

    return (
        <div ref={selectRef} className='input-select'>
            <div className="input-select__active" onClick={handleSetActive}>
                <FontAwesomeIcon icon={activeEl.img} />
            </div>
            <ul className={active ? 'input-select__list active' : 'input-select__list'}>
                {inputSelectArr.map(item => (
                    <li key={item.id} onClick={() => changeActiveEl(item)}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
}
