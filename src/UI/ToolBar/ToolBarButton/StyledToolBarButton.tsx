import styled from "styled-components";
import { toolBarButtonSize } from "../../../StyleVariables/size";

const Button = styled.div`
  height: 100%;
  color: ${({ isActive }) => (isActive ? "blue" : "black")};

  svg {
    width: ${toolBarButtonSize};
    height: ${toolBarButtonSize};
    color: ${({ isActive }) => (isActive ? "blue" : "black")};
  }
`;

const StyledToolBarButton = {
  Button,
};

export default StyledToolBarButton;
