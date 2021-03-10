import styled from "styled-components";
import colors, {
  mediaBreakpoints,
  toolBarButtonSize,
} from "../../../consts/styledVariables";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1em;
`;

export const Icon = styled.div`
  svg {
    color: ${colors.dark};
    width: ${toolBarButtonSize};
    height: ${toolBarButtonSize};
  }

  @media (max-width: ${mediaBreakpoints.large}) {
    svg {
      width: 2em;
      height: 2em;
    }
  }
`;

export const InputContainer = styled.div`
  margin-left: 1em;
  color: ${colors.dark};

  label {
    display: block;
    text-align: center;
  }
`;

export const Range = styled.input`
  background: transparent;
  width: 5em;
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  width: 1.2em;
  height: 20%;
  margin: auto;
`;
