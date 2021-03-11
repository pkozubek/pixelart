import styled from 'styled-components';
import { mediaBreakpoints } from '../../consts/styledVariables';

const backgroundColor = "#fff";
const titleBar = '#5c5c5c';
const modalHeader = 50;
const modalActions = 50;
const buttonSize = 30;

const height = {
    large: 300,
    small: 250
}

const width = {
    large: 500,
    small: 300
}

const returnBackground = (type: string) => {
    switch(type) {
        case 'normal':
        default: 
            return '#5c5c5c';
        case 'positive':
            return '#6da86a';
        case 'negative':
            return '#db7e6e';
        case 'action':
            return '#688ca1';
    }
}

export const Modal = styled.div`
    width: ${width.large+'px'};
    height: ${height.large+'px'};
    background: ${backgroundColor};
    position: absolute;
    z-index: 100;
    top: ${`calc(50% - ${width.large/2}px)`};
    left: ${`calc(50% - ${width.large/2}px)`};
    padding-bottom: 1em;

    @media (max-width: ${mediaBreakpoints.small}) {
        width: ${width.small + 'px'};
        height: ${height.small + 'px'};
        top: ${`calc(50% - ${height.small/2}px)`};
        left: ${`calc(50% - ${width.small/2}px)`};
    }
`;

export const Title = styled.div`
    width: 100%;
    height: ${modalHeader+'px'};
    background: ${titleBar};
    color: white;
    
    h2 {
        padding: 1em 0 0 1em;
        font-size: 1.2em;
        font-weight: bolder;
    }
`

export const CloseIcon = styled.span`
    color: white;
    position: absolute;
    left: calc(95% - ${(buttonSize/2)+'px'});
    top: 10px;
    width: ${buttonSize+'px'};
    height: ${buttonSize+'px'};

    :hover {
        cursor: pointer;
    }

    svg {
        width: ${buttonSize+'px'};
        height: ${buttonSize+'px'};
    }
`;

export const Body = styled.div`
    width: 80%;
    margin: auto;
    height: ${`calc(100% - ${modalHeader + modalActions}px)`};
`

export const Content = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    text-align: center;
    font-size: 1.2em;
`


export const Actions = styled.div`
    height: ${modalActions+'px'};
    display: flex;
    justify-content: flex-end;
    margin:  0 5px 0 5px;

    > * {
        height: 90%;
        width: 100px
    }
`

export const Button = styled.button`
    margin-right:1em;
    border:none;
    background: ${({type}) => returnBackground(type)};
    color: white;
    font-weight: bolder;

    :hover {
        cursor: pointer;
    }
`
