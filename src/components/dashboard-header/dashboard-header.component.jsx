import Greetings from '../greetings/greetings.component';
import SearchBox from '../search-box/search-box.component';
import { DashboardHeaderContainer } from './dashboard-header.styles';

const DashboardHeader = () => (
    <DashboardHeaderContainer>
        <SearchBox />
        <Greetings />
    </DashboardHeaderContainer>
);

export default DashboardHeader;
