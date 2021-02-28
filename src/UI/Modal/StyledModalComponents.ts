import styled from 'styled-components';

const modalWith = 500;
const modalHeight = 300;
const modalHeader = 50;
const modalActions = 50;
const buttonSize = 30;

const backgroundColor = "#fff";
const titleBar = '#5c5c5c';

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

const modalPosition = {
    top: `calc(50% - ${modalHeight/2}px)`,
    left: `calc(50% - ${modalWith/2}px)`
}

const modalSize = {
    width: modalWith+'px',
    height: modalHeight+'px',
    header: modalHeader+'px',
    actions: modalActions+'px',
    content: `calc(100% - ${modalHeader + modalActions}px)`
}

const Modal = styled.div`
    width: ${modalSize.width};
    height: ${modalSize.height};
    background: ${backgroundColor};
    position: absolute;
    z-index: 100;
    top: ${modalPosition.top};
    left: ${modalPosition.left};
    padding-bottom: 1em;
`;

const Title = styled.div`
    width: 100%;
    height: ${modalSize.header};
    background: ${titleBar};
    color: white;
    
    h2 {
        padding: 1em 0 0 1em;
        font-size: 1.2em;
        font-weight: bolder;
    }
`

const CloseIcon = styled.span`
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

const Body = styled.div`
    width: 80%;
    margin: auto;
    height: ${modalSize.content};
`

const Content = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    text-align: center;
    font-size: 1.2em;
`


const Actions = styled.div`
    width: calc(100%  - 10px);
    height: ${modalSize.actions};
    display: flex;
    justify-content: flex-end;
    margin:  0 5px 0 5px;

    > * {
        height: 90%;
        width: 100px
    }
`

const Button = styled.button`
    margin-right:1em;
    border:none;
    background: ${({type}) => returnBackground(type)};
    color: white;
    font-weight: bolder;

    :hover {
        cursor: pointer;
    }
`

const ModalStyledComponents = {
    Modal,
    Title,
    CloseIcon,
    Content,
    Body,
    Actions,
    Button
}

export default ModalStyledComponents;