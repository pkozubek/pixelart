import styled from 'styled-components';

const pickerHeight='313px';

const Popover = styled.div`
      position: absolute;
      z-index: 2;
`

const Cover = styled.div`
      position: fixed;
      top: ${({top}) => top ? `${top}px` : '0px'};
      right: 0px;
      bottom: 0px;
      left: ${({left}) => left ? `${left}px` : '0px'};
      height: ${pickerHeight};
`;

const StyledColorPicker = {
    Popover,
    Cover
}

export default StyledColorPicker;