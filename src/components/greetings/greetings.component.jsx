import { useContext } from 'react';
import {
    AccountIcon,
    ArrowDowntIcon,
    GreetingsContainer,
} from './greetings.styles';
import { UserContext } from '../../contexts/user.context';

const Greetings = () => {
    const { isUserDropownOpen, setIsuserDropDownOpen, currentUser } =
        useContext(UserContext);

    console.log(currentUser);

    return (
        <GreetingsContainer
            onClick={() => setIsuserDropDownOpen(!isUserDropownOpen)}
        >
            {currentUser && currentUser.photoURL ? (
                <img src={currentUser.photoURL} alt="user" />
            ) : (
                <AccountIcon />
            )}
            <span>Hi, {currentUser ? currentUser.displayName : 'User'}</span>
            <ArrowDowntIcon />
        </GreetingsContainer>
    );
};

export default Greetings;
