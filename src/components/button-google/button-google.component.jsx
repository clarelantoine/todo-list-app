import { Icon } from '@iconify/react';

import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { Button } from './button-google.styles';

const ButtonGoogle = () => {
    // signin with google button handler
    const signInWithGoogle = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            // await signInWithGoogleRedirect();

            await createUserDocumentFromAuth(user);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Button type="button" onClick={signInWithGoogle}>
            <Icon icon="logos:google-icon" />
            Continue with Google
        </Button>
    );
};

export default ButtonGoogle;
