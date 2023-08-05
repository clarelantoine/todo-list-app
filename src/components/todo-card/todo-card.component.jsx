import { useContext, useEffect } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import StarRateIcon from '@mui/icons-material/StarRate';

import { AnimatePresence, useAnimate, usePresence } from 'framer-motion';
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

const TodoCard = ({ task, index }) => {
    // eslint-disable-next-line
    const { id, description, isFavorite, createdDate, bgColor } = task;

    const { deleteTaskItem, setFavoriteTaskItem, filteredTasks } =
        useContext(TaskContext);

    // actions button handlers
    const favoriteButtonHandler = () => setFavoriteTaskItem(task);
    const deleteButtonHandler = () => deleteTaskItem(task);

    const [scope, animate] = useAnimate();
    const [isPresent, safeToRemove] = usePresence();

    useEffect(() => {
        if (isPresent) {
            const animateIn = async () => {
                await animate(
                    scope.current,
                    // { scale: [0.5, 1] },
                    { opacity: [0, 1] },
                    { duration: 0.5, delay: 0.1 * index }
                );
            };

            animateIn();
        }
    }, [isPresent, filteredTasks]);

    return (
        <AnimatePresence>
            <TodoCardContainer $bgColor={bgColor} ref={scope}>
                <p>{description}</p>
                {createdDate && (
                    <CardDate>{formattedDate(createdDate)}</CardDate>
                )}
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

                <span className="closeButtonContainer">
                    <CloseButton onClick={deleteButtonHandler} />
                </span>
            </TodoCardContainer>
        </AnimatePresence>
    );
};

TodoCard.displayName = 'TodoCard';

export default TodoCard;
