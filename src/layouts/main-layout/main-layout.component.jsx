import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import { MainLayoutContainer } from './main-layout.styles';

const MainLayout = () => (
    <MainLayoutContainer>
        <Header />
        <div className="content">
            <Outlet />
        </div>
        <Footer />
    </MainLayoutContainer>
);

export default MainLayout;
