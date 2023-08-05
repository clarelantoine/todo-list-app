import { useContext } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import StarRateIcon from '@mui/icons-material/StarRate';

import { AnimatePresence, motion } from 'framer-motion';
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
        <AnimatePresence mode="sync">
            <TodoCardContainer
                layout
                $bgColor={bgColor}
                as={motion.div}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                // transition={{ duration: 0.2 }}
            >
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

export default TodoCard;
