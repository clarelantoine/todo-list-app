import styled from 'styled-components';

export const SidebarContainer = styled.aside`
    max-width: 121px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid var(--theme-secondary);
    padding: 59px 0;
`;

export const Logo = styled.span`
    font-weight: 700;
    font-size: 14px;
    min-height: 30px;
    display: flex;
    align-items: center;
`;
