import {
    AddNewIcon,
    FilterButton,
    Logo,
    SidebarContainer,
} from './sidebar.styles';

export const filterColors = {
    gossip: '#B9FBC0',
    koromiko: '#FFBF69',
    spray: '#8EECF5',
    iceCold: '#98F5E1',
    apricotPeach: '#FAC9B8',
    cherub: '#F1C0E8',
};

const Sidebar = () => (
    <SidebarContainer>
        <Logo>Mulahazati</Logo>
        <AddNewIcon />

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
