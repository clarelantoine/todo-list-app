import styled from 'styled-components';

export const AddNoteFormContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 25px;

    &::placeholder,
    &::-webkit-input-placeholder {
        color: var(--theme-primary);
    }
    &:-ms-input-placeholder {
        color: var(--theme-primary);
    }

    textarea {
        font-family: 'Inter', sans-serif;
        padding: 35px 30px;
        // font-size: 18px;
        color: var(--theme-primary);
        border: 1px solid var(--theme-secondary);
        outline: none;
    }

    .add-button {
        background: var(--theme-primary);
        color: var(--theme-background-primary);
        padding: 10px 15px;
        border-radius: 15px;
        cursor: pointer;

        :disabled {
            background: var(--theme-primary);
            opacity: 0.5;
        }
    }
`;

export const CategoryField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        margin: 0;
    }
`;

export const CategoryFieldGroup = styled.div`
    display: flex;
    gap: 11px;
`;

export const CategoryFieldOption = styled.span`
    width: 33px;
    height: 33px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ $color }) => $color};
    cursor: pointer;
    overflow: visible;
    position: relative;

    &:before {
        ${({ $isActive, $color }) =>
            $isActive &&
            `
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border:  2px solid ${$color};
    
    `}
    }
`;
