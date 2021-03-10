import styled from "styled-components";
import { colors, mediaBreakpoints } from "../../consts/styledVariables";

export const Wrapper = styled.div`
  width: auto;
  padding: 0 10px 0 10px;
  border-right: 1px solid ${colors.inactive};
  position: relative;

  @media (max-width: ${mediaBreakpoints.large}) {
    padding: 1em;
    width: 100%;
    border: 1px solid ${colors.light};
  }
`;

export const CategoryName = styled.p`
  text-align: center;
  color: ${colors.dark};

  @media (max-width: ${mediaBreakpoints.large}) {
    position: absolute;
    left: calc(100% - 20px);
    top: 20%;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 80%;
  align-items: center;
`;
