import LogoImage from '../../assets/images/logo512.png';
import {
    HeaderContainer,
    HeaderLogo,
    HeaderNavigation,
    HeaderNavigationItem,
} from './header.styles';

function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo to="/">
                <img
                    src={LogoImage}
                    alt="Mulahazati logo"
                    width="30"
                    height="30"
                />
                <span>Mulahazati</span>
            </HeaderLogo>
            <HeaderNavigation>
                <HeaderNavigationItem to="auth">Login</HeaderNavigationItem>
                <HeaderNavigationItem to="auth">Sign up</HeaderNavigationItem>
            </HeaderNavigation>
        </HeaderContainer>
    );
}

export default Header;
