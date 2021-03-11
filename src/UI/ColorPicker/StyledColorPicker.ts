import styled from 'styled-components';
import { mediaBreakpoints } from '../../consts/styledVariables';

const photshopHeight='313px';
const photohsopWidth='513px';

const chromeHeight='240px';
const chromeWidth='225px';

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
      height: ${photshopHeight};
      width: ${photohsopWidth};

      .chrome-picker {
            display: none;
      }

      .photoshop-picker {
            display: block;
      }


      @media (max-width: ${mediaBreakpoints.small}) {
            height: ${chromeHeight};
            width: ${chromeWidth};
            left: ${`calc(90% - ${chromeWidth})`};

            .chrome-picker {
                  display: block;
            }

            .photoshop-picker {
                  display: none;
            }
      }
`;

const StyledColorPicker = {
    Popover,
    Cover
}

export default StyledColorPicker;