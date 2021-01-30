import React from "react";
import * as StyledCategory from "./StyledCategory";

interface ToolBarCategoryProps {
  children?: any;
  name: string;
}

const ToolBarCategory = (props: ToolBarCategoryProps) => {
  return (
    <StyledCategory.Wrapper>
      <StyledCategory.Container>{props.children}</StyledCategory.Container>
      <StyledCategory.CategoryName>{props.name}</StyledCategory.CategoryName>
    </StyledCategory.Wrapper>
  );
};

export default ToolBarCategory;
