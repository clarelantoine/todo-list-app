import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

// card container
export const TodoCardContainer = styled.div`
    background: ${({ $bgColor }) => $bgColor};
    height: 250px;
    border-radius: 15px;
    position: relative;
    padding: 35px 30px;
    display: flex;
    flex-direction: column;

    // card description
    p {
        margin: 0;
        font-size: 18px;
    }
`;

// card date
export const CardDate = styled.span`
    margin-top: auto;
    font-size: 12px;
`;

// card actions
export const CardActions = styled.div`
    display: flex;
    position: absolute;
    right: 30px;
    bottom: 31px;
    gap: 5px;
`;

// action button common
const ActionButton = styled.span`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: var(--theme-primary);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
        width: 15px;
        height: 15px;
        color: var(--theme-background-primary);
    }
`;

// edit button
export const EditButton = styled(ActionButton)``;

// favorite button
export const FavoriteButton = styled(ActionButton)`
    background: ${({ $isFavorite }) =>
        $isFavorite ? `#FFDF00` : `var(--theme-primary)`};
    svg {
        color: ${({ $isFavorite }) =>
            $isFavorite
                ? `var(--theme-primary)`
                : `var(--theme-background-primary)`};
    }
`;

// close button
export const CloseButton = styled(CloseIcon)`
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
`;
