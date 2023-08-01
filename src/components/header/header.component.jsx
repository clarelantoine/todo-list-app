import Greetings from '../greetings/greetings.component';
import SearchBox from '../search-box/search-box.component';
import { HeaderContainer } from './header.styles';

const Header = () => (
    <HeaderContainer>
        <SearchBox />
        <Greetings />
    </HeaderContainer>
);

export default Header;
