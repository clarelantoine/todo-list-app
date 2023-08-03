import { useContext } from 'react';
import { TaskContext } from '../../contexts/task.context';
import {
    SearchBoxContainer,
    SearchBoxIcon,
    SearchInputField,
} from './search-box.styles';

const SearchBox = () => {
    // use handler function setSearchStr from the task context
    const { searchStr, setSearchStr } = useContext(TaskContext);

    // onChange handler
    const onChangeHandler = (event) => {
        const { value } = event.target;
        setSearchStr(value);
    };

    return (
        <SearchBoxContainer>
            <SearchBoxIcon />
            <SearchInputField
                type="search"
                placeholder="Search"
                name="search"
                onChange={onChangeHandler}
                value={searchStr}
            />
        </SearchBoxContainer>
    );
};

export default SearchBox;
