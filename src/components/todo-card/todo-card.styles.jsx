import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

export const TodoCardContainer = styled.div`
    background: #9fd3c7;
    // border: 1px solid #385170;
    height: 250px;
    border-radius: 15px;
    position: relative;
    max-width: 100%;
`;

export const TodoCardWrapper = styled.div`
    overflow-wrap: break-word;
    padding: 25px;

    p {
        margin: 0;
        font-size: 20px;
    }
`;

export const CloseButton = styled(CloseIcon)`
    position: absolute;
    top: 25px;
    right: 25px;
`;
