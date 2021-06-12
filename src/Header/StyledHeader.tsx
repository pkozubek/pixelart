import styled from "styled-components";
import {
  topBarHeight,
  toolBarHeight,
  colors,
  mediaBreakpoints,
} from "../consts/styledVariables";

const headerBackground = "#bebdbd";
const tabBackground = "#ede9e8";

export const TabContainer = styled.div`
  background: ${headerBackground};
  width: 100%;
  height: ${topBarHeight};
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

export const Navigation = styled.nav``;

export const TabList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
`;

export const Tab = styled.li`
  background: ${tabBackground};
  border: ${({ isActive }) => (isActive ? `1px solid ${colors.dark}` : "none")};
  border-bottom: none;
  font-weight: ${({ isActive }) => (isActive ? `bolder` : "normal")};
  color: ${({ isActive }) => (isActive ? colors.active : colors.dark)};
  padding: 6px;
  font-size: 1.1em;
  transition: color 0.2s;

  @media (max-width: ${mediaBreakpoints.small}) {
    font-size: 0.9em;
  }
`;

export const TabContent = styled.div`
  min-height: ${toolBarHeight};
  height: auto;
  width: 100%;
  background: ${tabBackground};
  display: flex;
  flex-wrap: wrap;
`;
