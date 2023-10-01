import styled from 'styled-components';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const AddNewIcon = styled(AddCircleIcon)`
    margin-top: 3px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(18, 18, 18, 1);
    transform: scale(1);
    animation: pulse 1.8s infinite;

    cursor: pointer;

    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(18, 18, 18, 0.7);
        }

        70% {
            transform: scale(1);
            box-shadow: 0 0 0 5px rgba(18, 18, 18, 0);
        }

        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(18, 18, 18, 0);
        }
    }
`;

export const NotesIcon = styled(ManageAccountsIcon)`
    margin-top: 3px;
    width: 50px;
    height: 50px;

    /* cursor: pointer; */
`;
