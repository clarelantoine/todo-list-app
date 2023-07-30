import Greetings from '../greetings/greetings.component';
import SearchForm from '../search-form/search-form.component';
import { HeaderContainer } from './header.styles';

const Header = () => (
    <HeaderContainer>
        <SearchForm />
        <Greetings />
    </HeaderContainer>
);

export default Header;
