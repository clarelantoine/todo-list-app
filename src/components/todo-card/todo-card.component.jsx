import { useContext } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import StarRateIcon from '@mui/icons-material/StarRate';
import { TaskContext } from '../../contexts/task.context';
import { formattedDate } from '../../utils/date';

import {
    CardActions,
    CardDate,
    CloseButton,
    FavoriteButton,
    EditButton,
    TodoCardContainer,
} from './todo-card.styles.jsx';

const TodoCard = ({ task }) => {
    // eslint-disable-next-line
    const { description, isFavorite, createdDate, bgColor } = task;

    const { deleteTaskItem, setFavoriteTaskItem } = useContext(TaskContext);

    // actions button handlers
    const favoriteButtonHandler = () => setFavoriteTaskItem(task);
    const deleteButtonHandler = () => deleteTaskItem(task);

    return (
        <TodoCardContainer $bgColor={bgColor}>
            <p>{description}</p>
            {createdDate && <CardDate>{formattedDate(createdDate)}</CardDate>}
            <CardActions>
                <FavoriteButton
                    onClick={favoriteButtonHandler}
                    $isFavorite={isFavorite}
                >
                    <StarRateIcon />
                </FavoriteButton>

                <EditButton>
                    <EditIcon />
                </EditButton>
            </CardActions>

            <CloseButton onClick={deleteButtonHandler} />
        </TodoCardContainer>
    );
};
export default TodoCard;
