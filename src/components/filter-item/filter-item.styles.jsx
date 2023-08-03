import styled from 'styled-components';

export const FilterButton = styled.span`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ $color }) => $color};
    cursor: pointer;
    overflow: visible;
    position: relative;

    &:before {
        ${({ $isActive, $color }) =>
            $isActive &&
            `
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border:  1px solid ${$color};
    
    `}
    }
`;
