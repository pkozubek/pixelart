import React from "react";
import StyledToolBarCategory from "./StyledToolBarCategory";

interface ToolBarCategoryProps {
  children?: any;
  name: string;
}

const ToolBarCategory = (props: ToolBarCategoryProps) => {
  return (
    <StyledToolBarCategory.Category>
      <StyledToolBarCategory.Container>
        {props.children}
      </StyledToolBarCategory.Container>
      <StyledToolBarCategory.CategoryName>
        {props.name}
      </StyledToolBarCategory.CategoryName>
    </StyledToolBarCategory.Category>
  );
};

export default ToolBarCategory;
