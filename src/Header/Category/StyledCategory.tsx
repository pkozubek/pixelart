import styled from "styled-components";
import colors from "../../consts/styledVariables";

export const Wrapper = styled.div`
  width: auto;
  padding: 0 10px 0 10px;
  border-right: 1px solid ${colors.inactive};
`;

export const CategoryName = styled.p`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 80%;
  align-items: center;
`;
