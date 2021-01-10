import styled from "styled-components";

const Category = styled.div`
  width: auto;
  margin-left: 5px;
  border-right: 1px solid black;
`;

const CategoryName = styled.p`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 80%;
  align-items: center;
`;

const StyledToolBarCategory = {
  Category,
  CategoryName,
  Container,
};

export default StyledToolBarCategory;
