import { useContext } from 'react';
import LogoImage from '../../assets/images/logo512.png';
import {
    HeaderContainer,
    HeaderLogo,
    HeaderNavigation,
    HeaderNavigationItem,
} from './header.styles';
import { UserContext } from '../../contexts/user.context';

function Header() {
    const { currentUser } = useContext(UserContext);
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
                {currentUser ? (
                    <HeaderNavigationItem to="">Logout</HeaderNavigationItem>
                ) : (
                    <>
                        <HeaderNavigationItem to="signin">
                            Login
                        </HeaderNavigationItem>
                        <HeaderNavigationItem to="signup">
                            Sign up
                        </HeaderNavigationItem>
                    </>
                )}
            </HeaderNavigation>
        </HeaderContainer>
    );
}

export default Header;
