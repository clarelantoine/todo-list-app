import styled from 'styled-components';

export const ContentsContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* padding: 0 30px 60px 105px; */
    padding: 0 68px 60px 100px;
    /* padding: 0 67.5px 60px; */

    .page-title-container {
        display: flex;
        justify-content: space-between;
    }

    .page-title {
        margin: 0;
        font-weight: 600;
        font-size: 42px;
        text-transform: capitalize;
    }
`;
