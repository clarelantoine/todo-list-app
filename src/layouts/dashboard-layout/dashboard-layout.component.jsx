import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar.component';
import Modal from '../../components/modal/modal.component';
import Contents from '../../components/contents/contents.component';
import * as Styled from './dashboard-layout.styles';
import { selectCurrentUser } from '../../store/user/user.selector';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import { APP_DATA } from '../../app-data';

const DashboardLayout = () => {
    const currentUser = useSelector(selectCurrentUser);
    const location = useLocation();

    if (!currentUser) {
        return (
            <Navigate
                to={APP_DATA.navigation.signin}
                state={{ from: location }}
                replace
            />
        );
    }

    return (
        <Styled.DashboardLayoutContainer>
            <Header />
            <Styled.DashboardWrapper>
                <Sidebar />
                <Contents />
            </Styled.DashboardWrapper>
            <Footer />
            <Modal />
        </Styled.DashboardLayoutContainer>
    );
};

export default DashboardLayout;
