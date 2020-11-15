import React from 'react';
import { createPortal } from 'react-dom';
import Shadow from '../Shadow/Shadow';
import ModalStyledComponents from './ModalStyledComponents';

interface IModalProps {
    visible: boolean;
    content: string;
    visibilityHandler: () => void;
}

const Modal = (props: IModalProps) => {
    let modalContent = null;
    if (props.visible) modalContent = <Shadow onClick={props.visibilityHandler}>
        <ModalStyledComponents.Modal>
            <p>{props.content}</p>
        </ModalStyledComponents.Modal>
    </Shadow>;

    return createPortal(
        modalContent,
        document.getElementById('modal')
    );
}

export default Modal;