import styled from "styled-components";
import colors from "../StyleVariables/colors";
import { toolBarHeight } from "../StyleVariables/size";

const ToolBar = styled.div`
  height: ${toolBarHeight};
  width: 100%;
  background: ${colors.toolBar};
  display: flex;
`;

const StyledSideBar = {
  ToolBar,
};

export default StyledSideBar;
