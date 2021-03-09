import styled from "styled-components";
import { topBarHeight, toolBarHeight, colors } from "../consts/styledVariables";

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

export const Tab = styled.div`
  background: ${tabBackground};
  border: ${({ isActive }) => (isActive ? `1px solid ${colors.dark}` : "none")};
  border-bottom: none;
  font-weight: ${({ isActive }) => (isActive ? `bolder` : "normal")};
  color: ${({ isActive }) => (isActive ? colors.active : colors.dark)};
  padding: 6px;
  font-size: 1.1em;
  transition: color 0.2s;
`;

export const TabContent = styled.div`
  height: ${toolBarHeight};
  width: 100%;
  background: ${tabBackground};
  display: flex;
`;
