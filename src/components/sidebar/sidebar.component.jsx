import { Route, Routes } from 'react-router-dom';
import { SidebarContainer } from './sidebar.styles';
import NoteSidebar from '../note-sidebar/note-sidebar.component';

const Sidebar = () => (
    <SidebarContainer>
        <Routes>
            <Route path="*" element={<NoteSidebar />} />
            <Route path="notes" element={<NoteSidebar />} />
        </Routes>
    </SidebarContainer>
);

export default Sidebar;
