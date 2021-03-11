import React from "react";
import { createPortal } from "react-dom";
import Shadow from "../Shadow/Shadow";
import * as ModalStyledComponents from "./StyledModalComponents";
import { AiFillCloseCircle } from "react-icons/ai";

interface IModalButton {
  name: string;
  key: string;
  type?: "positive" | "negative" | "action" | "normal";
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
      <ModalStyledComponents.Button
        type={button.type || "normal"}
        onClick={button.action}
        key={button.key}
      >
        {button.name}
      </ModalStyledComponents.Button>
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
          <ModalStyledComponents.Body>
            <ModalStyledComponents.Content
              isString={typeof props.content === "string"}
            >
              {props.content}
            </ModalStyledComponents.Content>
          </ModalStyledComponents.Body>
          <ModalStyledComponents.Actions>
            {props.buttons?.map((button) => renderButton(button))}
          </ModalStyledComponents.Actions>
        </ModalStyledComponents.Modal>
      </>
    );

  return createPortal(modalContent, document.getElementById("modal"));
};

export default Modal;
