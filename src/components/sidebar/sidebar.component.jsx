import { AddNewIcon, Logo, SidebarContainer } from './sidebar.styles';

import Filter from '../filter/filter.component';

const Sidebar = ({ setIsTodoForm, isTodoForm }) => (
    <SidebarContainer>
        <Logo>
            <span>Mulahazati</span>
        </Logo>

        <AddNewIcon onClick={() => setIsTodoForm(!isTodoForm)} />

        <Filter />
    </SidebarContainer>
);

export default Sidebar;
