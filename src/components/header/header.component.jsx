import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoImage from '../../assets/images/logo512.png';
import * as Styled from './header.styles';
import { selectCurrentUser } from '../../store/user/user.selector';
import Greetings from '../greetings/greetings.component';
import { APP_DATA } from '../../app-data';

function Header() {
    const currentUser = useSelector(selectCurrentUser);

    return (
        <Styled.HeaderContainer>
            <Styled.HeaderLogo to={APP_DATA.navigation.home}>
                <img
                    src={LogoImage}
                    alt={APP_DATA.name}
                    width="30"
                    height="30"
                />
                <span>{APP_DATA.name}</span>
            </Styled.HeaderLogo>

            <Styled.HeaderRight>
                {currentUser && (
                    <div className="left-nav-links">
                        <NavLink to={APP_DATA.navigation.notes}>
                            My Notes
                        </NavLink>
                        <NavLink to={APP_DATA.navigation.setting}>
                            Account Setting
                        </NavLink>
                    </div>
                )}

                <Styled.HeaderNavigation>
                    {currentUser ? (
                        <Greetings />
                    ) : (
                        <>
                            <Styled.HeaderNavigationItem
                                to={APP_DATA.navigation.signin}
                            >
                                Login
                            </Styled.HeaderNavigationItem>
                            <Styled.HeaderNavigationItem
                                to={APP_DATA.navigation.signup}
                            >
                                Sign up
                            </Styled.HeaderNavigationItem>
                        </>
                    )}
                </Styled.HeaderNavigation>
            </Styled.HeaderRight>
        </Styled.HeaderContainer>
    );
}

export default Header;
