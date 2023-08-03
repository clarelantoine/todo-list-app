import FilterItem from '../filter-item/filter-item.component';
import { APP_DATA } from '../../app-data';
import { FilterContainer } from './filter.styles';

const Filter = () => {
    // get categories from app-data
    const { categories } = APP_DATA;

    return (
        <FilterContainer>
            {categories.map((category) => (
                <FilterItem key={category.color} catergory={category} />
            ))}
        </FilterContainer>
    );
};

export default Filter;
