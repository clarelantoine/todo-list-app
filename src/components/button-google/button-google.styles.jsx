import styled from 'styled-components';

export const Button = styled.button`
    align-items: center;
    background: none;
    border: 1px solid var(--theme-primary);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: 14px;
    gap: 12px;
    height: 50px;
    justify-content: center;
    outline: none;

    svg {
        height: 18px;
        width: 18px;
    }
`;
