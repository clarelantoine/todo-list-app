import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import { MainLayoutContainer } from './main-layout.styles';
import SnackBarAlert from '../../components/snack-bar-alert/snack-bar-alert.component';
import { selectUserIsLoading } from '../../store/user/user.selector';
import Spinner from '../../components/spinner/spinner.component';

const MainLayout = () => {
    const isLoading = useSelector(selectUserIsLoading);
    return (
        <MainLayoutContainer>
            <Header />
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="content">
                    <Outlet />
                </div>
            )}
            <Footer />
            <SnackBarAlert />
        </MainLayoutContainer>
    );
};

export default MainLayout;
