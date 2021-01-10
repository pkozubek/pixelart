import React, { useContext } from "react";
import { editorMods } from "../../../consts";
import EditorContext from "../../../context/EditorContext";
import StyledToolBarButton from "./StyledToolBarButton";

interface ToolBarButtonProps {
  icon: any;
  name: string;
  editorMode: editorMods;
  isActive: boolean;
}

const ToolBarButton = (props: ToolBarButtonProps) => {
  const { changeEditorMode } = useContext(EditorContext);

  const onButtonClick = () => changeEditorMode(props.editorMode);

  return (
    <StyledToolBarButton.Button
      isActive={props.isActive}
      onClick={onButtonClick}
    >
      {props.icon}
      <p>{props.name}</p>
    </StyledToolBarButton.Button>
  );
};

export default ToolBarButton;
