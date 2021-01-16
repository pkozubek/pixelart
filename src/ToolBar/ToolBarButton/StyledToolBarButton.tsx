import styled from "styled-components";
import { toolBarButtonSize } from "../../StyleVariables/size";

const returnColor = (props) => {
  const { isActive, disabled } = props;

  if (isActive) return "blue";
  if (disabled) return "gray";

  return "black";
};

const Button = styled.button`
  height: 100%;
  transition: color 1s;

  svg {
    width: ${toolBarButtonSize};
    height: ${toolBarButtonSize};
    color: ${returnColor};
  }
`;

const StyledToolBarButton = {
  Button,
};

export default StyledToolBarButton;
