import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1440px;
    margin: auto;
    min-height: 100vh;
`;

export const ContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 59px 105px;

    .page-title {
        margin: 0;
        margin-top: 60px;
        font-weight: 600;
        font-size: 42px;
        /* padding-bottom: 20px; */
        /* border-bottom: 1px solid var(--theme-secondary); */
    }
`;
