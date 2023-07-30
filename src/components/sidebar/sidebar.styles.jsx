import styled from 'styled-components';

import AddCircleIcon from '@mui/icons-material/AddCircle';

export const SidebarContainer = styled.aside`
    max-width: 121px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid var(--theme-secondary);
    padding: 59px 0;

    .filters {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`;

export const Logo = styled.span`
    font-weight: 700;
    font-size: 14px;
    min-height: 30px;
`;

export const AddNewIcon = styled(AddCircleIcon)`
    width: 50px;
    height: 50px;
    margin-top: 50px;
    cursor: pointer;
`;

export const FilterButton = styled.span`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ $color }) => $color};
    cursor: pointer;
`;
