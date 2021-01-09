import React from "react";
import StyledToolBarButton from "./StyledToolBarButton";

interface ToolBarButtonProps {
  icon: any;
  name: string;
}

const ToolBarButton = ({ icon, name }: ToolBarButtonProps) => {
  return (
    <StyledToolBarButton.Button>
      {icon}
      <p>{name}</p>
    </StyledToolBarButton.Button>
  );
};

export default ToolBarButton;
