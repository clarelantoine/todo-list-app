import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer, SignInContainer, Title } from './sign-in-form.styles';
import { UserContext } from '../../contexts/user.context';
import {
    signInWithGooglePopup,
    signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const [formFields, setFormFields] = useState(defaultFormFields);

    // deconstruct formFields state
    const { email, password } = formFields;

    const navigate = useNavigate();

    // signin with google button handler
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        // await signInWithGoogleRedirect();
    };

    // form fields onChange event handler
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    // submit form event handler
    const handleSubmit = (event) => {
        event.preventDefault();
        setCurrentUser('clarel');
        console.log('form submitted');
    };

    useEffect(() => {
        currentUser ? navigate('/dashboard') : navigate('/auth');
    }, [currentUser]);

    return (
        <SignInContainer>
            <Title>Already have an account?</Title>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={handleChange}
                    required
                />

                <ButtonContainer>
                    <button type="submit">sign in</button>
                    <button type="button" onClick={signInWithGoogle}>
                        google sign in
                    </button>
                </ButtonContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;
