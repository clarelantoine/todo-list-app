import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectAlert } from '../../store/alert/alert.selector';
import { hideAlert } from '../../store/alert/alert.action';

const intialState = {
    alertType: 'error',
    isOpen: false,
    message: '',
};

const SnackBarAlert = () => {
    const alert = useSelector(selectAlert);

    const [snackBar, setSnackBar] = useState(intialState);

    const { alertType, isOpen, message } = snackBar;

    const dispatch = useDispatch();

    const handleClose = () => dispatch(hideAlert());

    useEffect(() => {
        setSnackBar({ ...snackBar, ...alert });
    }, [alert]);

    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={alertType}
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackBarAlert;
