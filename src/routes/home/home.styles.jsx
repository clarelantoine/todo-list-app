import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 466px;
    gap: 50px;

    h1 {
        font-size: 96px;
        line-height: 96px;
        margin: 0;
    }

    p {
        font-size: 15px;
    }

    .home-cta {
        background: var(--theme-primary);
        color: var(--theme-background-primary);
        max-width: 190px;
        text-align: center;
        padding: 15px;
        border-radius: 10px;
    }
`;
