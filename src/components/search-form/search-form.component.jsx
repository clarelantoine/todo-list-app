import { useContext } from 'react';
import FormInput from '../form-input/form-input.component';
import { TaskContext } from '../../contexts/task.context';

const SearchForm = () => {
    const { searchTask } = useContext(TaskContext);

    return (
        <FormInput
            type="search"
            placeholder="Search"
            name="search"
            onChange={(event) => searchTask(event.target.value)}
        />
    );
};

export default SearchForm;
