import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserDropDownContainer } from './user-dropdown.styles';
import { UserContext } from '../../contexts/user.context';
import { dropdownVariants } from './user-dropdown.animations';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const UserDropdown = () => {
    const { isUserDropownOpen } = useContext(UserContext);
    const navigate = useNavigate();

    const signOutUserHandler = async () => {
        await signOutUser();
        navigate('/');
    };

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
                    <NavLink to="settings">Account setting</NavLink>
                    <NavLink onClick={signOutUserHandler}>Logout</NavLink>
                </UserDropDownContainer>
            )}
        </AnimatePresence>
    );
};

export default UserDropdown;
