import { useContext } from 'react';
import FilterItem from '../filter-item/filter-item.component';
import { FilterContainer } from './filter.styles';
import { TaskContext } from '../../contexts/task.context';

const Filter = () => {
    // get categories from task context
    const { categories } = useContext(TaskContext);

    return (
        <FilterContainer>
            {categories.map((category) => (
                <FilterItem key={category.id} category={category} />
            ))}
        </FilterContainer>
    );
};

export default Filter;
// tasks.find((obj) => obj.categoryId === task.categoryId)
