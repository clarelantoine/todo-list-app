import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Modal from '../../components/modal/modal.component';

import { ContentContainer, DashboardContainer } from './dashboard.styles';

const Dashboard = () => {
    const { pathname } = useLocation();
    console.log(pathname);
    const pageTitle = pathname === '/dashboard/' ? 'Welcome' : 'Notes';

    return (
        <DashboardContainer>
            <Sidebar />
            <ContentContainer>
                <Header />
                <h2 className="page-title">{pageTitle}</h2>
                <Outlet />
                <Footer />
            </ContentContainer>
            <Modal />
        </DashboardContainer>
    );
};
export default Dashboard;
