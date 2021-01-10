import styled from "styled-components";
import colors from "../../StyleVariables/colors";
import { toolBarHeight } from "../../StyleVariables/size";

const SideBar = styled.div`
  height: ${toolBarHeight};
  width: 100%;
  background: ${colors.toolBar};
  display: flex;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
`;

const StyledSideBar = {
  SideBar,
  ButtonsContainer,
};

export default StyledSideBar;
