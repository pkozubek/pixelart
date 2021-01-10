import styled from "styled-components";

const Tooltiptext = styled.div`
  opacity: 0;
  width: 120px;
  background-color: #fff;
  text-align: center;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 120%;
  left: 50%;
  margin-left: -60px;
`;

const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${Tooltiptext} {
    opacity: 1;
    transition: opacity 1s;
  }
`;

const StyledTooltip = {
  Tooltip,
  Tooltiptext,
};

export default StyledTooltip;
