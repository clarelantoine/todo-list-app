import Greetings from '../greetings/greetings.component';
import SearchBox from '../search-box/search-box.component';
import UserDropdown from '../user-dropdown/user-dropdown.component';
import { DashboardHeaderContainer } from './dashboard-header.styles';

const DashboardHeader = () => (
    <DashboardHeaderContainer>
        <SearchBox />
        <Greetings />
        <UserDropdown />
    </DashboardHeaderContainer>
);

export default DashboardHeader;
