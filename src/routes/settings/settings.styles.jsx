import styled from 'styled-components';

export const AccountSettingContainer = styled.div`
    margin-bottom: 95px;
    margin-top: 60px;

    form {
        display: flex;
        justify-content: space-between;
        /* flex-direction: row-reverse; */
    }
`;

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 780px;
    width: 100%;
    gap: 20px;

    div {
        display: flex;
        gap: 15px;
        width: 100%;
    }

    input {
        /* margin-bottom: 15px; */
        height: 50px;
        padding: 0 15px;
        font-size: 14px;
        border-radius: 10px;
        border: 1px solid var(--theme-secondary);
        outline: none;
        width: 100%;

        :focus {
            border: 1px solid var(--theme-primary);
        }
    }

    button[type='submit'] {
        margin-top: 30px;
        height: 50px;
        font-size: 14px;
        background: var(--theme-primary);
        color: var(--theme-background-primary);
        border-radius: 10px;
        max-width: 250px;
    }
`;

export const LeftWrapper = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const AvatarImage = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 15px;
    border: 1px solid var(--theme-secondary);
    /* background: var(--theme-primary); */
`;
