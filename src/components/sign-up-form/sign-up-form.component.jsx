import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpContainer, Title } from './sign-up-form.styles';
import ButtonGoogle from '../button-google/button-google.component';
import FormInput from '../form-input/form-input.component';

import { selectCurrentUser } from '../../store/user/user.selector';
import { signUpStart } from '../../store/user/user.action';
import Button from '../button/button.component';
import { APP_DATA } from '../../app-data';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const currentUser = useSelector(selectCurrentUser);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formFields;

    // const resetFormFields = () => setFormFields(defaultFormFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // check if passwords are matching
        if (password !== confirmPassword) {
            return alert("Password doesn't match");
        }

        dispatch(signUpStart(email, password, displayName));
    };

    useEffect(() => {
        if (currentUser) navigate(APP_DATA.navigation.notes);
    }, [currentUser]);

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

                <Button type="submit">sign up</Button>
            </form>
            <span>
                Already have an account?{' '}
                <NavLink to={APP_DATA.navigation.signin}>Log in</NavLink>
            </span>
        </SignUpContainer>
    );
};
export default SignUpForm;
