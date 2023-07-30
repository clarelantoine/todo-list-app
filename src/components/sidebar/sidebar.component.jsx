import {
    AddNewIcon,
    FilterButton,
    Logo,
    SidebarContainer,
} from './sidebar.styles';

import { filterColors } from '../../index.styles';

const Sidebar = ({ setIsTodoForm, isTodoForm }) => (
    <SidebarContainer>
        <Logo>Mulahazati</Logo>
        <AddNewIcon onClick={() => setIsTodoForm(!isTodoForm)} />

        <div className="filters">
            {Object.keys(filterColors).map((key) => (
                <FilterButton
                    key={filterColors[key]}
                    $color={filterColors[key]}
                >
                    {/* <span>{filterColors[key]}</span> */}
                </FilterButton>
            ))}
        </div>
    </SidebarContainer>
);

export default Sidebar;
