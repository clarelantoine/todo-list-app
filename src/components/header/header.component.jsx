import { useDispatch, useSelector } from 'react-redux';
import LogoImage from '../../assets/images/logo512.png';
import {
    HeaderContainer,
    HeaderLogo,
    HeaderNavigation,
    HeaderNavigationItem,
} from './header.styles';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

function Header() {
    const currentUser = useSelector(selectCurrentUser);

    const dispatch = useDispatch();

    const signOutHandler = () => dispatch(signOutStart());

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
                    <HeaderNavigationItem onClick={signOutHandler}>
                        Logout
                    </HeaderNavigationItem>
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
