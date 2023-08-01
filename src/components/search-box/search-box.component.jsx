import { useContext } from 'react';
import { TaskContext } from '../../contexts/task.context';
import {
    SearchBoxContainer,
    SearchBoxIcon,
    SearchInputField,
} from './search-box.styles';

const SearchBox = () => {
    // use handler function searchTask from the task context
    const { searchTask } = useContext(TaskContext);

    return (
        <SearchBoxContainer>
            <SearchBoxIcon />
            <SearchInputField
                type="search"
                placeholder="Search"
                name="search"
                onChange={(event) => searchTask(event.target.value)}
            />
        </SearchBoxContainer>
    );
};

export default SearchBox;
