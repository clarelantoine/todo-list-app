import { useState, useEffect } from 'react';
import { ButtonContainer, SignInContainer, Title } from './sign-in-form.styles';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    // deconstruct formFields state
    const { email, password } = formFields;

    // signin with google button handler
    const signInWithGoogle = () => {
        console.log('signin with google');
    };

    // form fields onChange event handler
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    useEffect(() => {
        console.log(formFields);
    }, [formFields]);

    return (
        <SignInContainer>
            <Title>Already have an account?</Title>
            <span>Sign in with your email and password</span>

            <form>
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
