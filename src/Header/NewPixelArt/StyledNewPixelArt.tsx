import styled from "styled-components";
import { ImFileEmpty } from "react-icons/im";
import colors, { mediaBreakpoints } from "../../consts/styledVariables";

const Button = styled.div`
  text-align: center;
  background: ${colors.active};
  color: white;
  transition: background 1s;
  padding: 6px;

  &:hover {
    transition: background 1s;
    background: ${colors.hover};
    cursor: pointer;
  }

  @media (max-width: ${mediaBreakpoints.small}) {
    padding: 4px;
    font-size: 0.9em;
  }
`;

const Icon = styled(ImFileEmpty)`
  margin-right: 4px;
`;

const StyledNewPixelArt = {
  Button,
  Icon,
};

export default StyledNewPixelArt;
