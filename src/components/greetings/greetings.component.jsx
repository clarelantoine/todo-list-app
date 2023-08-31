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

    return (
        <GreetingsContainer
            onClick={() => setIsuserDropDownOpen(!isUserDropownOpen)}
        >
            <AccountIcon />
            <span>Hi, {currentUser ? currentUser.displayName : 'User'}</span>
            <ArrowDowntIcon />
        </GreetingsContainer>
    );
};

export default Greetings;
