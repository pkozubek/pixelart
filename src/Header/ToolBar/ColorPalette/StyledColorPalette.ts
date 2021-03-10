import styled from "styled-components";
import colors, { mediaBreakpoints } from "../../../consts/styledVariables";

export const ColorRectangle = styled.div`
  width: 20px;
  height: 20px;
  margin: 5px;
  outline: ${(props) =>
    props.isPicked ? `4px solid ${colors.active}` : `2px solid ${colors.dark}`};
  background: ${({ color }) => color};

  @media (max-width: ${mediaBreakpoints.small}) {
    width: 16px;
    height: 16px;
  }

  @media (max-width: ${mediaBreakpoints.verySmall}) {
    width: 14px;
    height: 14px;
  }
`;

export const ColorContainer = styled.div`
  width: 300px;
  margin-right: 1em;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${mediaBreakpoints.small}) {
    width: 220px;
    margin-right: 6px;
  }

  @media (max-width: ${mediaBreakpoints.verySmall}) {
    width: 200px;
    margin-right: 5px;
  }
`;

