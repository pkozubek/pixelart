import React from "react";
import { createPortal } from "react-dom";
import Shadow from "../Shadow/Shadow";
import ModalStyledComponents from "./StyledModalComponents";
import { AiFillCloseCircle } from "react-icons/ai";

interface IModalButton {
  name: string;
  key: string;
  action: () => void;
}

interface IModalProps {
  visible: Boolean;
  content: any;
  title: string;
  buttons?: IModalButton[];
  visibilityHandler: () => void;
}

const Modal = (props: IModalProps) => {
  let modalContent = null;

  const renderButton = (button: IModalButton) => {
    return (
      <button onClick={button.action} key={button.key}>
        {button.name}
      </button>
    );
  };

  if (props.visible)
    modalContent = (
      <>
        <Shadow onClick={props.visibilityHandler} />
        <ModalStyledComponents.Modal>
          <ModalStyledComponents.Title>
            <h2>{props.title}</h2>
            <ModalStyledComponents.CloseIcon onClick={props.visibilityHandler}>
              <AiFillCloseCircle />
            </ModalStyledComponents.CloseIcon>
          </ModalStyledComponents.Title>
          <ModalStyledComponents.Content
            isString={typeof props.content === "string"}
          >
            {props.content}
          </ModalStyledComponents.Content>
          <ModalStyledComponents.Actions>
            {props.buttons?.map((button) => renderButton(button))}
          </ModalStyledComponents.Actions>
        </ModalStyledComponents.Modal>
      </>
    );

  return createPortal(modalContent, document.getElementById("modal"));
};

export default Modal;
