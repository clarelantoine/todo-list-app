import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SignInContainer, Title } from './sign-in-form.styles';

import FormInput from '../form-input/form-input.component';
import ButtonGoogle from '../button-google/button-google.component';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import {
    selectCurrentUser,
    selectUserIsLoading,
} from '../../store/user/user.selector';
import Spinner from '../spinner/spinner.component';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isLoading = useSelector(selectUserIsLoading);

    const [formFields, setFormFields] = useState(defaultFormFields);

    // deconstruct formFields state
    const { email, password } = formFields;

    const navigate = useNavigate();

    // form fields onChange event handler
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    // submit form event handler
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const userAuth = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            console.log('userAuth', userAuth);
        } catch (error) {
            // error, account not found
            if (error.code === 'auth/user-not-found') {
                // return alert('Oops! Account not found');
                return alert('Invalid Username or Password!');
            }
            // error, account not found
            if (error.code === 'auth/wrong-password') {
                return alert('Invalid Username or Password!');
            }
            // unknown error
            console.log(error);
        }
    };

    useEffect(() => {
        if (currentUser) navigate('/dashboard/notes');
    }, [currentUser]);

    return isLoading ? (
        <Spinner />
    ) : (
        <SignInContainer>
            <Title>Log in to Mulahazati</Title>
            <ButtonGoogle />
            <span>or</span>
            {/* <span>Sign in with your email and password</span> */}
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    placeholder="Username"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Log in</button>
            </form>
            <span>
                No account? <NavLink to="/signup">Create one</NavLink>
            </span>
        </SignInContainer>
    );
};

export default SignInForm;
