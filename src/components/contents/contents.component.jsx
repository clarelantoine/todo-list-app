import { Outlet, useMatch } from 'react-router-dom';
import { ContentsContainer } from './contents.styles';
import SearchBox from '../search-box/search-box.component';
import { APP_DATA } from '../../app-data';

const Contents = () => {
    const match = useMatch('/:firstRoute/*');
    const pageTitle = match.params['*'] || match.params.firstRoute;

    const isNotesRoute = useMatch(APP_DATA.navigation.notes);

    return (
        <ContentsContainer>
            <div className="page-title-container">
                <h2 className="page-title">{pageTitle}</h2>
                {isNotesRoute && <SearchBox />}
            </div>
            <Outlet />
        </ContentsContainer>
    );
};
export default Contents;
