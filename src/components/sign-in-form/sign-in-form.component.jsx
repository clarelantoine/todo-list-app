import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import ButtonGoogle from '../button-google/button-google.component';

import { selectCurrentUser } from '../../store/user/user.selector';

import { emailSignInStart } from '../../store/user/user.action';

import { SignInContainer, Title } from './sign-in-form.styles';
import Button from '../button/button.component';
import { APP_DATA } from '../../app-data';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const currentUser = useSelector(selectCurrentUser);

    const [formFields, setFormFields] = useState(defaultFormFields);

    // deconstruct formFields state
    const { email, password } = formFields;

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // form fields onChange event handler
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    // submit form event handler
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(emailSignInStart(email, password));
    };

    useEffect(() => {
        if (currentUser) navigate('/dashboard/notes');
    }, [currentUser]);

    return (
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

                <Button type="submit">Log in</Button>
            </form>
            <span>
                No account?{' '}
                <NavLink to={APP_DATA.navigation.signup}>Create one</NavLink>
            </span>
        </SignInContainer>
    );
};

export default SignInForm;
