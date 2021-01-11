import React, { useContext } from "react";
import { editorMods } from "../../consts";
import EditorContext from "../../context/EditorContext";
import StyledToolBarButton from "./StyledToolBarButton";
import Tooltip from "../../UI/Tooltip/Tooltip";

interface ToolBarButtonProps {
  icon: any;
  name: string;
  editorMode: editorMods;
  isActive: boolean;
  key?: string;
}

const ToolBarButton = (props: ToolBarButtonProps) => {
  const { changeEditorMode } = useContext(EditorContext);

  const onButtonClick = () => changeEditorMode(props.editorMode);

  return (
    <Tooltip text={props.name}>
      <StyledToolBarButton.Button
        isActive={props.isActive}
        onClick={onButtonClick}
      >
        {props.icon}
      </StyledToolBarButton.Button>
    </Tooltip>
  );
};

export default ToolBarButton;
