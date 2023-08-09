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
import { cardVariants } from './todo-card.animations';

const TodoCard = ({ task }) => {
    // eslint-disable-next-line
    const { description, isFavorite, createdDate, bgColor } = task;

    const { setUpdateTask, deleteTaskItem, setFavoriteTaskItem } =
        useContext(TaskContext);

    return (
        <AnimatePresence mode="wait">
            <TodoCardContainer
                layout
                $bgColor={bgColor}
                as={motion.div}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <p>{description}</p>
                {createdDate && (
                    <CardDate>{formattedDate(createdDate)}</CardDate>
                )}
                <CardActions>
                    <FavoriteButton
                        onClick={() => setFavoriteTaskItem(task)}
                        $isFavorite={isFavorite}
                    >
                        <StarRateIcon />
                    </FavoriteButton>

                    <EditButton
                        onClick={() => {
                            setUpdateTask(task);
                        }}
                    >
                        <EditIcon />
                    </EditButton>
                </CardActions>

                <span
                    className="closeButtonContainer"
                    onClick={() => deleteTaskItem(task)}
                >
                    <CloseButton />
                </span>
            </TodoCardContainer>
        </AnimatePresence>
    );
};

export default TodoCard;
