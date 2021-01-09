import styled from "styled-components";
import colors from "../StyleVariables/colors";
import { bodyContainerHeight } from "../StyleVariables/size";

const App = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.background};
`;

const BodyContainer = styled.div`
  width: 100%;
  height: ${bodyContainerHeight};
  display: flex;
  flex-wrap: wrap;
`;

const WorkingSpace = styled.div`
  width: 100%;
  height: ${bodyContainerHeight};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledApp = {
  App,
  BodyContainer,
  WorkingSpace,
};

export default StyledApp;
