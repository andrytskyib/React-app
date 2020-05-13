import React from "react";
import classes from "./Modal.module.css";
import * as basicLightbox from 'basiclightbox';
import classNames from 'classnames';

const Modal = ({show, modalImg, handlerClickHide, handlerPressHide}) => {
    const showHideClassName = show ? classes.ModalShow : classes.ModalHide;

    const modalClasses = classNames(
        classes.Overlay,
        showHideClassName
    )

    return (
        <div
            className={modalClasses}
            onClick={handlerClickHide}
            onKeyDown={handlerPressHide}
        >
            <div className={classes.Modal}>
                <img src={modalImg} alt=""/>
            </div>
        </div>
    )
}

export default Modal;