import styled from "styled-components";
import { toolBarButtonSize } from "../../../StyleVariables/size";

const returnColor = (props) => {
  const { isActive, disabled } = props;

  if (isActive) return "blue";
  if (disabled) return "rgba(0,0,0,0.2)";

  return "black";
};

const Button = styled.button`
  height: 100%;
  background: transparent;
  margin: 0 6px 0 6px;
  border: none;
  border: 2px solid gray;
  transition: border 0.2s;
  padding: 3px;

  svg {
    width: ${toolBarButtonSize};
    height: ${toolBarButtonSize};
    color: ${returnColor};
    transition: color 0.2s;
  }

  &:hover {
    border: 2px solid blue;

    svg {
      color: blue;
    }
  }
`;

const StyledToolBarButton = {
  Button,
};

export default StyledToolBarButton;
