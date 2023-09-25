import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { googleSignInStart } from '../../store/user/user.action';
import { Button } from './button-google.styles';

const ButtonGoogle = () => {
    const dispatch = useDispatch();

    // signin with google button handler
    const signInWithGoogle = () => dispatch(googleSignInStart());

    return (
        <Button type="button" onClick={signInWithGoogle}>
            <Icon icon="logos:google-icon" />
            Continue with Google
        </Button>
    );
};

export default ButtonGoogle;
