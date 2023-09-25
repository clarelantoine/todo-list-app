import { Outlet, useMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../footer/footer.component';
import DashboardHeader from '../dashboard-header/dashboard-header.component';
import Modal from '../modal/modal.component';

import { ContentsContainer } from './contents.styles';
import { selectUserIsLoading } from '../../store/user/user.selector';
import Spinner from '../spinner/spinner.component';

const Contents = () => {
    // get current page title
    const match = useMatch('/:firstRoute/*');
    const pageTitle = match.params['*'] || match.params.firstRoute;

    const isLoading = useSelector(selectUserIsLoading);

    return (
        <ContentsContainer>
            <DashboardHeader />
            <h2 className="page-title">{pageTitle}</h2>
            {isLoading ? <Spinner /> : <Outlet />}
            <Footer />
            <Modal />
        </ContentsContainer>
    );
};
export default Contents;
