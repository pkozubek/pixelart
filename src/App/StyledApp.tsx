import styled from "styled-components";
import { appVariables } from "../consts/styledVariables";

const App = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${appVariables.colors.background};
`;

const BodyContainer = styled.div`
  width: 100%;
  height: ${appVariables.size.bodyContainerHeight};
  display: flex;
  flex-wrap: wrap;
`;

const WorkingSpace = styled.div`
  width: 100%;
  height: 100%;
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
