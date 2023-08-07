import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

// close button
export const CloseButton = styled(CloseIcon)`
    width: 20px;
    height: 20px;
    color: var(--theme-background);
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ModalContainer = styled.div`
    position: relative;
    max-width: 500px;
    width: 100%;
    background: #ffffff;
    padding: 30px 25px;
    border-radius: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .modal-title {
        margin: 0 0 20px;
    }
`;

export const ModalTitle = styled.h2`
    margin: 0 0 20px;
`;

export const ModalCloseButton = styled.button`
    position: absolute;
    top: -5px;
    right: -5px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #ff6666;
    justify-content: center;
    align-items: center;
    display: flex;
    border: 0;
    outline: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
`;
