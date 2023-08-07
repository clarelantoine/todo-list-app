import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import FormInput from '../form-input/form-input.component';
import SeachImage from '../../assets/icons/search-icon.svg';

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
    /* border: 0; */
    border: 1px solid var(--theme-primary);
    outline: 0;
    border-radius: 10px;
    /* padding: 0 10px; */
    height: 100%;

    width: 254px;

    /* display: block; */
    padding: 18px 4px 18px 40px;
    background: transparent url(${SeachImage}) no-repeat;
    background-position: 10px center;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: var(--theme-primary);
    }
    :-ms-input-placeholder {
        color: var(--theme-primary);
    }

    /* &:focus {
        border: 0;
        outline: 0;
    } */
`;

export const SearchBoxIcon = styled(SearchIcon)``;
// export const SearchBoxIcon = styled(SeachImage)``;
