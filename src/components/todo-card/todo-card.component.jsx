import { useContext } from 'react';

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

    const { deleteTaskItem, addTaskToFavorite } = useContext(TaskContext);

    return (
        <TodoCardContainer $bgColor={bgColor}>
            <p>{description}</p>
            {createdDate && <CardDate>{formattedDate(createdDate)}</CardDate>}
            <CardActions>
                <span onClick={() => addTaskToFavorite(task)}>
                    <FavoriteButton $isFavorite={isFavorite} />
                </span>
                <span>
                    <EditButton />
                </span>
            </CardActions>

            <CloseButton onClick={() => deleteTaskItem(task)} />
        </TodoCardContainer>
    );
};
export default TodoCard;
