import Sidebar from '../../components/sidebar/sidebar.component';
import Modal from '../../components/modal/modal.component';
import Contents from '../../components/contents/contents.component';
import { DashboardLayoutContainer } from './dashboard-layout.styles';

const DashboardLayout = () => (
    <DashboardLayoutContainer>
        <Sidebar />
        <Contents />
        <Modal />
    </DashboardLayoutContainer>
);

export default DashboardLayout;
