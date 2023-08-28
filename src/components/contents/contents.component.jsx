import { Outlet, useMatch } from 'react-router-dom';
import Footer from '../footer/footer.component';
import DashboardHeader from '../dashboard-header/dashboard-header.component';
import Modal from '../modal/modal.component';

import { ContentsContainer } from './contents.styles';

const Contents = () => {
    // get current page title
    const match = useMatch('/:firstRoute/*');
    const pageTitle = match.params['*'] || match.params.firstRoute;

    return (
        <ContentsContainer>
            <DashboardHeader />
            <h2 className="page-title">{pageTitle}</h2>
            <Outlet />
            <Footer />
            <Modal />
        </ContentsContainer>
    );
};
export default Contents;
