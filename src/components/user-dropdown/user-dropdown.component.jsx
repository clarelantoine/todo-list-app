import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserDropDownContainer } from './user-dropdown.styles';
import { dropdownVariants } from './user-dropdown.animations';
import { signOutStart } from '../../store/user/user.action';

const UserDropdown = () => {
    const dispatch = useDispatch();

    const signOutHandler = () => dispatch(signOutStart());

    return (
        <AnimatePresence mode="wait">
            <UserDropDownContainer
                as={motion.div}
                variants={dropdownVariants}
                initial="initial"
                animate="visible"
                exit="exit"
            >
                <NavLink to="settings">Account setting</NavLink>
                <NavLink onClick={signOutHandler}>Logout</NavLink>
            </UserDropDownContainer>
        </AnimatePresence>
    );
};

export default UserDropdown;
