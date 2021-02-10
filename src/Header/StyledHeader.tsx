import styled from "styled-components";
import { topBarHeight, toolBarHeight, colors } from "../consts/styledVariables";

const TabContainer = styled.div`
  background: ${colors.grey};
  width: 100%;
  height: ${topBarHeight};
  display: flex;
`;

const Tab = styled.div`
  background: ${({ isActive }) =>
    isActive ? `${colors.toolBar}` : `${colors.grey}`};
  border: ${({ isActive }) => (isActive ? `1px solid gray` : "none")};
  border-bottom: none;
  padding: 0.2em;
  font-size: 1.1em;
`;

const TabContent = styled.div`
  height: ${toolBarHeight};
  width: 100%;
  background: ${colors.toolBar};
  display: flex;
`;

const HeaderStyledComponents = {
  TabContainer,
  Tab,
  TabContent,
};

export default HeaderStyledComponents;
