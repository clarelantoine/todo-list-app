import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    height: 30px;
    position: relative;
`;

export const HeaderLogo = styled(NavLink)`
    display: flex;
    gap: 10px;

    span {
        font-weight: 700;
        font-size: 20px;
        display: flex;
        align-items: center;
    }
`;

export const HeaderNavigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;

    span {
        &:last-child {
            border: 1px solid;
            border-radius: 50px;
            padding: 5px 20px;
            /* height: 100%; */
        }
    }
`;

export const HeaderNavigationItem = styled(NavLink)`
    font-weight: 400;

    &:last-child {
        border: 1px solid;
        border-radius: 50px;
        padding: 5px 20px;
        /* height: 100%; */
    }
`;
