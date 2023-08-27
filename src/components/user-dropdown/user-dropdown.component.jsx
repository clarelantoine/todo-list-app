import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserDropDownContainer } from './user-dropdown.styles';
import { UserContext } from '../../contexts/user.context';

const dropdownVariants = {
    initial: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0 },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.1,
        },
    },
};

const UserDropdown = () => {
    const { isUserDropownOpen } = useContext(UserContext);

    return (
        <AnimatePresence mode="wait">
            {isUserDropownOpen && (
                <UserDropDownContainer
                    as={motion.div}
                    variants={dropdownVariants}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                >
                    <NavLink to="">Account setting</NavLink>
                    <NavLink to="/">Logout</NavLink>
                </UserDropDownContainer>
            )}
        </AnimatePresence>
    );
};

export default UserDropdown;
