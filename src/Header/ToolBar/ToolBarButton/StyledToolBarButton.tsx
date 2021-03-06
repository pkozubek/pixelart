import styled from "styled-components";
import colors, {
  mediaBreakpoints,
  toolBarButtonSize,
} from "../../../consts/styledVariables";

const returnColor = (props) => {
  const { isActive, disabled } = props;

  if (isActive) return colors.active;
  if (disabled) return colors.inactive;

  return colors.dark;
};

const Button = styled.button`
  height: 100%;
  background: transparent;
  margin: 0 6px 0 6px;
  padding: 5px;
  border: none;
  border: 2px solid ${returnColor};
  transition: border 0.2s, box-shadow 0.5s;
  box-shadow: ${({ isActive }) => isActive && `0 0 6px ${colors.active}`};

  svg {
    width: ${toolBarButtonSize};
    height: ${toolBarButtonSize};
    color: ${returnColor};
    transition: color 0.2s;
  }

  &:hover {
    border: ${({ disabled }) =>
      `2px solid ${disabled ? colors.inactive : colors.hover}`};
    cursor: pointer;

    svg {
      color: ${({ disabled }) => (disabled ? colors.inactive : colors.hover)};
    }
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${mediaBreakpoints.desktop}) {
    padding: 3px;

    svg {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: ${mediaBreakpoints.small}) {
    padding: 2px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const StyledToolBarButton = {
  Button,
};

export default StyledToolBarButton;
