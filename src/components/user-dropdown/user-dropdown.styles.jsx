import styled from 'styled-components';

export const UserDropDownContainer = styled.div`
    position: absolute;
    background: var(--theme-background-primary);
    right: 0;
    top: 40px;
    display: flex;
    flex-direction: column;
    min-width: 150px;
    padding: 5px 13px;
    border-radius: 10px;
    color: var(--theme-primary);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    a {
        padding: 10px 0;
        cursor: pointer;
        /* font-size: ; */

        :first-child {
            border-bottom: 1px solid #ccccccce;
        }
    }
`;
