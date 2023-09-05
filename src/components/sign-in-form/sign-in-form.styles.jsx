import styled from 'styled-components';

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    a {
        text-decoration: underline;
    }

    form {
        display: flex;
        flex-direction: column;

        input {
            margin-bottom: 15px;
            height: 50px;
            padding: 0 15px;
            font-size: 14px;
            border-radius: 10px;
            border: 1px solid var(--theme-primary);
            outline: none;
        }

        button[type='submit'] {
            margin-top: 10px;
            height: 50px;
            font-size: 14px;
            background: var(--theme-primary);
            color: var(--theme-background-primary);
            border-radius: 10px;
        }
    }
`;

export const Title = styled.h1`
    margin: 0 0 20px;
`;
