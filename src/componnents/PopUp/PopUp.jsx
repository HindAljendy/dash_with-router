import './PopUp.css'
import React, { useState } from 'react';
import Modal from 'react-modal';
import Blogs from '../../pages/Blogs/Blogs';

const PopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <div className='HJ_container'>
            <Blogs />
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="HJ_modal_popUp"
                style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 80px rgba(0, 0, 0, 0.9)' }}
            >
                <h2>Delete the article?</h2>
                <p>You can be able to recover it</p>
                <div>
                    <button className='btn_cancel'>cancel</button>
                    <button className='HJ_btn' onClick={closeModal}>Delete Article</button>
                </div>

            </Modal>
        </div>

    )
}

export default PopUp