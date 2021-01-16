import React from "react";
import StyledToolBarButton from "./StyledToolBarButton";
import Tooltip from "../../UI/Tooltip/Tooltip";

interface ToolBarButtonProps {
  icon: any;
  name: string;
  isActive?: boolean;
  key?: string;
  disabled?: boolean;
  onClick: any;
}

const ToolBarButton = (props: ToolBarButtonProps) => {
  return (
    <Tooltip text={props.name}>
      <StyledToolBarButton.Button
        disabled={props.disabled}
        isActive={props.isActive}
        onClick={props.onClick}
      >
        {props.icon}
      </StyledToolBarButton.Button>
    </Tooltip>
  );
};

export default ToolBarButton;
