import styled from 'styled-components';

const Popover = styled.div`
      position: absolute;
      z-index: 2;
`

const Cover = styled.div`
      position: fixed;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
`;

const StyledColorPicker = {
    Popover,
    Cover
}

export default StyledColorPicker;