import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import StarRateIcon from '@mui/icons-material/StarRate';

export const TodoCardContainer = styled.div`
    background: ${({ $bgColor }) => $bgColor || '#CCCCCC'};
    height: 250px;
    border-radius: 15px;
    position: relative;
    padding: 35px 30px;
    display: flex;
    flex-direction: column;

    p {
        margin: 0;
        font-size: 18px;
    }
`;

export const CardActions = styled.div`
    display: flex;
    position: absolute;
    right: 30px;
    bottom: 31px;
    gap: 5px;

    span {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: var(--theme-primary);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        /* svg {
            width: 15px;
            height: 15px;
            color: var(--theme-background-primary);
        } */
    }
`;

export const CardDate = styled.span`
    margin-top: auto;
    font-size: 12px;
`;

export const CloseButton = styled(CloseIcon)`
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
`;

export const EditButton = styled(EditIcon)`
    width: 15px;
    height: 15px;
    color: var(--theme-background-primary);
`;

export const FavoriteButton = styled(StarRateIcon)`
    width: 15px;
    height: 15px;
    color: ${({ $isFavorite }) =>
        $isFavorite ? `yellow` : `var(--theme-background-primary)`};
`;
