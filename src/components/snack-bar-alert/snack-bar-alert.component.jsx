import { Alert, Snackbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectUserError } from '../../store/user/user.selector';

const SnackBarAlert = () => {
    const errorUser = useSelector(selectUserError);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (errorUser) {
            if (errorUser.code === 'auth/wrong-password') {
                setMessage('Incorrect password');
                setOpen(true);
            } else if (errorUser && errorUser.code === 'auth/user-not-found') {
                setMessage('No user associated with this email');
                setOpen(true);
            } else if (errorUser.code === 'auth/email-already-in-use') {
                setMessage('Cannot create user, email already in use');
                setOpen(true);
            } else if (errorUser.code === 'auth/invalid-email') {
                setMessage('Invalid email address');
                setOpen(true);
            } else if (errorUser.code === 'auth/too-many-requests') {
                setMessage('Account locked');
                setOpen(true);
            } else if (errorUser.code === 'auth/weak-password') {
                setMessage('Password should be at least 6 characters');
                setOpen(true);
            } else {
                setMessage('Unknown error');
                setOpen(true);
                console.log('User sign-in encountered an error', errorUser);
            }
        }
    }, [errorUser]);

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackBarAlert;
