import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar.component';
import Modal from '../../components/modal/modal.component';
import Contents from '../../components/contents/contents.component';
import { DashboardLayoutContainer } from './dashboard-layout.styles';
import { selectCurrentUser } from '../../store/user/user.selector';

const DashboardLayout = () => {
    const currentUser = useSelector(selectCurrentUser);
    const location = useLocation();

    if (!currentUser) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return (
        <DashboardLayoutContainer>
            <Sidebar />
            <Contents />
            <Modal />
        </DashboardLayoutContainer>
    );
};

export default DashboardLayout;
