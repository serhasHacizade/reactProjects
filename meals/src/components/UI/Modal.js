import React from 'react';
import classes from "./Modal.module.css";
import { createPortal } from 'react-dom';
const Backdrop = (props) => {
    return <div className={classes.backDrop}></div>
};
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};
const PortalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <div>
        {createPortal(<Backdrop />, PortalElement)}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
        
    </div>
  );
};

export default Modal;