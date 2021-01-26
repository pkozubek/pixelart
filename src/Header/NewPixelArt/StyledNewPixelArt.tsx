import styled from "styled-components";
import { ImFileEmpty } from "react-icons/im";

const Button = styled.div`
  text-align: center;
  background: blue;
  color: white;
  position: relative;
  transition: background 1s;
  padding: 4px;

  &:hover {
    transition: background 1s;
    background: darkblue;
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
