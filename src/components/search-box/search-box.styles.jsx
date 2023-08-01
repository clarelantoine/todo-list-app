import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import FormInput from '../form-input/form-input.component';

export const SearchBoxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    /* &:focus {
        border: 0;
        outline: 0;
    } */
`;

export const SearchInputField = styled(FormInput)`
    border: 0;
    border: 1px solid var(--theme-secondary);
    outline: 0;
    border-radius: 10px;
    padding: 0 10px;
    height: 100%;

    /* &:focus {
        border: 0;
        outline: 0;
    } */
`;

export const SearchBoxIcon = styled(SearchIcon)``;
