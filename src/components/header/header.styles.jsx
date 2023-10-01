import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    height: 30px;
    position: relative;
`;

export const HeaderLogo = styled(NavLink)`
    width: 225px;
    display: flex;
    gap: 10px;

    span {
        font-weight: 700;
        font-size: 20px;
        display: flex;
        align-items: center;
    }
`;

export const HeaderRight = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;

    .left-nav-links {
        display: flex;
        gap: 15px;
        align-items: center;

        .active {
            position: relative;
            &::after {
                content: '';
                width: 100%;
                height: 1px;
                position: absolute;
                background: var(--theme-primary);
                left: 0;
                bottom: -5px;
            }
        }
    }
`;

export const HeaderNavigation = styled.nav`
    display: flex;
    margin-left: auto;
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
        border-radius: 10px;
        padding: 5px 20px;
        /* height: 100%; */
    }
`;
