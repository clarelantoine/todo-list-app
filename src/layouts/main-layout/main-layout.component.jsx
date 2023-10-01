import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import { MainLayoutContainer } from './main-layout.styles';
import SnackBarAlert from '../../components/snack-bar-alert/snack-bar-alert.component';

const MainLayout = () => (
    <MainLayoutContainer>
        <Header />
        <div className="content">
            <Outlet />
        </div>
        <Footer />
        <SnackBarAlert />
    </MainLayoutContainer>
);

export default MainLayout;
