import styled from 'styled-components';
import DescriptionIcon from '@mui/icons-material/Description';

export const SidebarContainer = styled.aside`
    max-width: 120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid var(--theme-secondary);
    margin-bottom: 60px;
`;

export const Logo = styled.span`
    font-weight: 700;
    font-size: 14px;
    min-height: 30px;
    display: flex;
    align-items: center;
`;

export const NotesIcon = styled(DescriptionIcon)`
    margin-top: 3px;
    width: 50px;
    height: 50px;

    cursor: pointer;
`;
