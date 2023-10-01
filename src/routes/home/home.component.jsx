import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HomeContainer, HomeContent } from './home.styles';
import HomeImage from '../../assets/images/home_image.png';
import { selectCurrentUser } from '../../store/user/user.selector';
import { APP_DATA } from '../../app-data';

const Home = () => {
    const currentUser = useSelector(selectCurrentUser);

    return (
        <HomeContainer>
            <HomeContent>
                <h1>Let’s be always organized!</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Eget sit senectus
                    diam nec at suspendisse amet in habitasse. Placerat eget
                    nunc urna sit risus nullam tellus auctor magna.
                </p>

                <NavLink
                    className="home-cta"
                    to={
                        currentUser
                            ? APP_DATA.navigation.notes
                            : APP_DATA.navigation.signin
                    }
                >
                    Try it for free
                </NavLink>
            </HomeContent>
            <div>
                <img src={HomeImage} alt="" />
            </div>
        </HomeContainer>
    );
};

export default Home;
