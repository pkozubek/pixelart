import {useState, useCallback} from 'react';

interface useModalProps {
    initialVisibility?: Boolean;
    onConfirmation?: () => void;
}

interface useModalReturn {
    isModalVisible: Boolean;
    showModal: () => void;
    hideModal: () => void;
    visibilityHandler: () => void;
    confirmationHandler: () => void;
}

export const useModal = ({initialVisibility, onConfirmation}: useModalProps):useModalReturn => {
    const [isModalVisible, setModalVisble] = useState<Boolean>(initialVisibility || false);

    const showModal = useCallback(() => setModalVisble(true), []);
    const hideModal = useCallback(() => setModalVisble(false), []);
    const confirmationHandler = useCallback(() => {
        onConfirmation && onConfirmation();   
        hideModal();
    }, [onConfirmation])

    const visibilityHandler = useCallback(() => {
        setModalVisble(!isModalVisible);
    }, [isModalVisible]); 

    return {isModalVisible, showModal, hideModal, visibilityHandler, confirmationHandler};
}