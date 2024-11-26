import React from "react";
import { useEffect } from 'react';

const Modal = ({isOpen, title, children, closeModal}) => {
    useEffect(() => {
        import('./Modal.css');
    }, []);

    return (
        <>
        <div className={
            isOpen ? 'modal-wrap modal-show' : 'modal-wrap'
        }>
            <div className="modal-inner">
                <div className="modal-header">
                    <p className="title">{title}</p>
                    <button type="button" className="modal-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
        <div className={ isOpen ? 'dimmed active' : 'dimmed' }></div>
        </>
    );
}


export default Modal;