import Greetings from '../greetings/greetings.component';
import SearchBox from '../search-box/search-box.component';
import UserDropdown from '../user-dropdown/user-dropdown.component';
import { HeaderContainer } from './header.styles';

const Header = () => (
    <HeaderContainer>
        <SearchBox />
        <Greetings />
        <UserDropdown />
    </HeaderContainer>
);

export default Header;
