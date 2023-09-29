import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    AccountIcon,
    ArrowDowntIcon,
    GreetingsContainer,
} from './greetings.styles';
import { selectCurrentUser } from '../../store/user/user.selector';
import UserDropdown from '../user-dropdown/user-dropdown.component';

const Greetings = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const currentUser = useSelector(selectCurrentUser);

    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <GreetingsContainer
            ref={wrapperRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
            {currentUser && currentUser.photoURL ? (
                <img src={currentUser.photoURL} alt="user" />
            ) : (
                <AccountIcon />
            )}
            <span>Hi, {currentUser ? currentUser.displayName : 'User'}</span>

            <ArrowDowntIcon />

            {isDropdownOpen && <UserDropdown />}
        </GreetingsContainer>
    );
};

export default Greetings;
