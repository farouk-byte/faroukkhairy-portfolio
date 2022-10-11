import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import ModalStyle from './Modal.module.css'



const BackDrop = ({ closeModal }) => <div className={ModalStyle.BackDrop} onClick={closeModal}></div>
const Overlay = ({ closeModal, children }) => <div className={ModalStyle.Overlay}>
    <div className={ModalStyle.OverlayInner}>
        <div className={ModalStyle.clsBtn} onClick={closeModal}>
            <img src="./assessts/cls-btn.webp" alt="cls" />
        </div>
        <div className={ModalStyle.content}>
            {children}
        </div>
    </div>
</div>

const Modal = ({ closeModal, children }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Fragment>
                    <BackDrop closeModal={closeModal} />
                    <Overlay closeModal={closeModal} children={children} />
                </Fragment>, document.getElementById('modal')
            )}
        </Fragment>
    )
}

export default Modal