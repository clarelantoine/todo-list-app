import { useContext } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import StarRateIcon from '@mui/icons-material/StarRate';
import { TaskContext } from '../../contexts/task.context';

import { formattedDate } from '../../utils/date';

import {
    CardActions,
    CardDate,
    CloseButton,
    // EditButton,
    // FavoriteButton,
    TodoCardContainer,
} from './todo-card.styles.jsx';

const TodoCard = ({ task }) => {
    // eslint-disable-next-line
    const { description, categories, createdDate, bgColor } = task;

    const { deleteTaskItem } = useContext(TaskContext);

    return (
        <TodoCardContainer $bgColor={bgColor}>
            <p>{description}</p>
            {createdDate && <CardDate>{formattedDate(createdDate)}</CardDate>}
            <CardActions>
                <span>
                    <StarRateIcon />
                </span>
                <span>
                    <EditIcon />
                </span>
            </CardActions>

            <CloseButton onClick={() => deleteTaskItem(task)} />
        </TodoCardContainer>
    );
};
export default TodoCard;
