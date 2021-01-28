import React, { ReactChildren } from "react";
import StyledTooltip from "./StyledTooltip";

interface TooltipProps {
  children: JSX.Element;
  text: string;
}

const Tooltip = (props: TooltipProps) => {
  return (
    <StyledTooltip.Tooltip>
      {props.children}
      <StyledTooltip.Tooltiptext>{props.text}</StyledTooltip.Tooltiptext>
    </StyledTooltip.Tooltip>
  );
};

export default Tooltip;
