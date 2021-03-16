import React from "react";
import * as StyledDisplayOption from "./styledDisplayOption";

interface IDisplayOption {
  label: string;
  isActive: boolean;
  onCheck: () => void;
}

const DisplayOption = (props: IDisplayOption) => {
  return (
    <StyledDisplayOption.OptionWrapper>
      <StyledDisplayOption.Checbox
        onChange={props.onCheck}
        type="checkbox"
        checked={props.isActive}
      />
      <StyledDisplayOption.Label>{props.label}</StyledDisplayOption.Label>
    </StyledDisplayOption.OptionWrapper>
  );
};

export default DisplayOption;
