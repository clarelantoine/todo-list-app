import styled from 'styled-components';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const GreetingsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    user-select: none;

    img {
        width: 25px;
        height: 25px;
        border-radius: 50px;
    }
`;

export const AccountIcon = styled(AccountCircleIcon)`
    width: 25px;
    height: 25px;
`;
export const ArrowDowntIcon = styled(ArrowDropDownIcon)``;
