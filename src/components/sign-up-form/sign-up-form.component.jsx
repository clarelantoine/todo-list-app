import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { SignUpContainer, Title } from './sign-up-form.styles';
import ButtonGoogle from '../button-google/button-google.component';
import { UserContext } from '../../contexts/user.context';

const SignUpForm = () => {
    const { currentUser } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) navigate('/dashboard');
        // eslint-disable-next-line
    }, [currentUser]);

    return (
        <SignUpContainer>
            <Title>Sign up for Mulahazati</Title>
            <ButtonGoogle />
            <span>or</span>
            <form>
                <input type="text" placeholder="Display name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm password" />

                <button type="submit">sign up</button>
            </form>
            <span>
                Already have an account? <NavLink to="/signin">Log in</NavLink>
            </span>
        </SignUpContainer>
    );
};
export default SignUpForm;
