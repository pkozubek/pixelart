import styled from 'styled-components';
import colors from '../../StyleVariables/colors';

const modalWith = 500;
const modalHeight = 300;
const modalHeader = 50;
const modalActions = 50;
const buttonSize = 30;

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
    background: ${colors.modal.background};
    position: absolute;
    z-index: 100;
    top: ${modalPosition.top};
    left: ${modalPosition.left};
`;

const Title = styled.div`
    width: 100%;
    height: ${modalSize.header};
    background: ${colors.modal.header};
    color: ${colors.white};
    
    h2 {
        padding: 1em 0 0 1em;
    }
`

const CloseIcon = styled.span`
    color: ${colors.white};
    position: absolute;
    left: calc(100% - ${(buttonSize/2)+'px'});
    top: ${-buttonSize/2}px;
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

const Content = styled.div`
    width: 100%;
    height: ${modalSize.content};
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

const ModalStyledComponents = {
    Modal,
    Title,
    CloseIcon,
    Content,
    Actions
}

export default ModalStyledComponents;