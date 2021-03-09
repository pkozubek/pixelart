import styled from "styled-components";
import colors from "../../../consts/styledVariables";

export const ColorRectangle = styled.div`
  width: 20px;
  height: 20px;
  margin: 5px;
  outline: ${(props) =>
    props.isPicked ? `4px solid ${colors.active}` : `2px solid ${colors.dark}`};
  background: ${({ color }) => color};
`;

export const ColorContainer = styled.div`
  width: 300px;
  margin-right: 1em;
  display: flex;
  flex-wrap: wrap;
`;

