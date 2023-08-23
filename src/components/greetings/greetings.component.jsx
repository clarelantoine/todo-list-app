import { useContext, useEffect } from 'react';
import {
    AccountIcon,
    ArrowDowntIcon,
    GreetingsContainer,
} from './greetings.styles';
import { UserContext } from '../../contexts/user.context';

const Greetings = () => {
    const { isUserDropownOpen, setIsuserDropDownOpen } =
        useContext(UserContext);

    return (
        <GreetingsContainer
            onClick={() => setIsuserDropDownOpen(!isUserDropownOpen)}
        >
            <AccountIcon />
            <span>Hi, Clarel!</span>
            <ArrowDowntIcon />
        </GreetingsContainer>
    );
};

export default Greetings;
