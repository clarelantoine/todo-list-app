import { useContext } from 'react';
import { FilterButton } from './filter-item.styles';
import { TaskContext } from '../../contexts/task.context';

const FilterItem = ({ category }) => {
    // eslint-disable-next-line
    const { categoryId: id, title, bgColor: color } = category;

    const { filter, setFilter } = useContext(TaskContext);
    const { activeCategoryId } = filter;

    const onClickHandler = () => {
        activeCategoryId !== id
            ? setFilter({ ...filter, activeCategoryId: id })
            : setFilter({ ...filter, activeCategoryId: '' });
    };

    return (
        <FilterButton
            $color={color}
            $isActive={activeCategoryId === id}
            onClick={onClickHandler}
        />
    );
};

export default FilterItem;
