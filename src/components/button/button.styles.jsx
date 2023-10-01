import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

export const SpinnerContainer = styled.div`
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 3px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    border-top-color: #ffffff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
`;
