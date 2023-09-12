import { useContext } from 'react';
import { TaskContext } from '../../contexts/task.context';
import { SearchBoxContainer, SearchInputField } from './search-box.styles';

const SearchBox = () => {
    // use handler function setSearchStr from the task context
    const { filter, setFilter } = useContext(TaskContext);
    const { searchStr } = filter;

    // onChange handler
    const onChangeHandler = (event) => {
        const { value } = event.target;
        setFilter({ ...filter, searchStr: value });
    };

    return (
        <SearchBoxContainer>
            {/* <SearchBoxIcon /> */}
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
