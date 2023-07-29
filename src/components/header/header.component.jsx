import Greetings from '../greetings/greetings.component';
import { HeaderContainer } from './header.styles';

const Header = () => (
    <HeaderContainer>
        <div>search</div>
        <Greetings />
    </HeaderContainer>
);

export default Header;
