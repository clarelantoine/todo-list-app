import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SignUpContainer, Title } from './sign-up-form.styles';
import ButtonGoogle from '../button-google/button-google.component';
import FormInput from '../form-input/form-input.component';
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { selectCurrentUser } from '../../store/user/user.selector';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const currentUser = useSelector(selectCurrentUser);

    const navigate = useNavigate();

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // check if passwords are matching
        if (password !== confirmPassword) {
            return alert("Password doesn't match");
        }

        try {
            // create user auth
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            // create user doc
            await createUserDocumentFromAuth(user, { displayName });
            // reset form fields
            resetFormFields();
        } catch (error) {
            // error, email already in use
            if (error.code === 'auth/email-already-in-use') {
                return alert('Cannot create user, email already in use');
            }
            // error, invalid email address
            if (error.code === 'auth/invalid-email') {
                return alert('Invalid email address');
            }
            // unknown error
            console.log('User creation encountered an error', error);
        }
    };

    useEffect(() => {
        if (currentUser) navigate('/dashboard');
        // eslint-disable-next-line
    }, [currentUser]);

    useEffect(() => {
        console.table(formFields);
    }, [formFields]);

    return (
        <SignUpContainer>
            <Title>Sign up for Mulahazati</Title>
            <ButtonGoogle />
            <span>or</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    placeholder="Display name"
                    value={displayName}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    type="email"
                    name="email"
                    placeholder="Email"
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

                <FormInput
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />

                <button type="submit">sign up</button>
            </form>
            <span>
                Already have an account? <NavLink to="/signin">Log in</NavLink>
            </span>
        </SignUpContainer>
    );
};
export default SignUpForm;
