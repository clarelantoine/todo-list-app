import { useContext } from 'react';
import { FilterButton } from './filter-item.styles';
import { TaskContext } from '../../contexts/task.context';

const FilterItem = ({ catergory }) => {
    // eslint-disable-next-line
    const { title, color } = catergory;

    const { activeFilter, setActiveFilter } = useContext(TaskContext);

    const onClickHandler = () => {
        activeFilter !== color ? setActiveFilter(color) : setActiveFilter('');
    };

    return (
        <FilterButton
            $color={color}
            $isActive={activeFilter === color}
            onClick={onClickHandler}
        />
    );
};

export default FilterItem;
