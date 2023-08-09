import { useContext } from 'react';
import { AddNewIcon, Logo, SidebarContainer } from './sidebar.styles';

import Filter from '../filter/filter.component';
import { TaskContext } from '../../contexts/task.context';

const Sidebar = () => {
    const { showModal, setShowModal } = useContext(TaskContext);

    return (
        <SidebarContainer>
            <Logo>
                <span>Mulahazati</span>
            </Logo>

            <AddNewIcon onClick={() => setShowModal(!showModal)} />

            <Filter />
        </SidebarContainer>
    );
};

export default Sidebar;
