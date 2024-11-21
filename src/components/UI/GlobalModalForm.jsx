import React from 'react';
import './GlobalModalForm.css'
import { TopForm } from '../global/TopForm';
export const GlobalModalForm = ({ setModalActive }) => {

    const closeModal = e => {
        if (e.target.classList.contains('global-modal-form-inner')) {
            setModalActive(false)
        }
    }

    return (
        <div className='global-modal-form-inner' onMouseUp={e => closeModal(e)}>
            <TopForm closeBtn={true} setModalActive={setModalActive} />
        </div>
    );
}
