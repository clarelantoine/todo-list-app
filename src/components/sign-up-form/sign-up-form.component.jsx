import { ButtonContainer, SignUpContainer, Title } from './sign-up-form.styles';

const SignUpForm = () => (
    <SignUpContainer>
        <Title>Don't have an account?</Title>
        <span>Sign up with your email and password</span>

        <form>
            <input type="text" placeholder="display name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />

            <button type="submit">sign up</button>
        </form>
    </SignUpContainer>
);

export default SignUpForm;
