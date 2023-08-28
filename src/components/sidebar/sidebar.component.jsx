import { Route, Routes } from 'react-router-dom';
import { Logo, SidebarContainer } from './sidebar.styles';
import NoteSidebar from '../note-sidebar/note-sidebar.component';

const Sidebar = () => (
    <SidebarContainer>
        <Logo>
            <span>Mulahazati</span>
        </Logo>

        <Routes>
            <Route path="*" element={<p>Other Sidebar</p>} />
            <Route path="notes" element={<NoteSidebar />} />
        </Routes>
    </SidebarContainer>
);

export default Sidebar;
