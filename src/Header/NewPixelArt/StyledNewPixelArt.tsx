import styled from "styled-components";
import { ImFileEmpty } from "react-icons/im";
import colors from "../../consts/styledVariables";

const Button = styled.div`
  text-align: center;
  background: ${colors.active};
  color: white;
  position: relative;
  transition: background 1s;
  padding: 6px;

  &:hover {
    transition: background 1s;
    background: ${colors.hover};
    cursor: pointer;
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
