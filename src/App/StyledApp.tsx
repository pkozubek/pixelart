import styled from "styled-components";
import { appVariables } from "../consts/styledVariables";

export const App = styled.div`
  min-height: 100vh;
  background: ${appVariables.colors.background};
`;

export const WorkingSpace = styled.div`
  width: 100%;
  min-height: ${appVariables.size.bodyContainerHeight};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
