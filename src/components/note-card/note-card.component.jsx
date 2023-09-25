import { useContext } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import StarRateIcon from '@mui/icons-material/StarRate';

import { AnimatePresence, motion } from 'framer-motion';
import { TaskContext } from '../../contexts/task.context';
import { formatedDate } from '../../utils/date.utils';

import {
    CardActions,
    CardDate,
    CloseButton,
    FavoriteButton,
    EditButton,
    NoteCardContainer,
} from './note-card.styles.jsx';
import { cardVariants } from './note-card.animations';

const NoteCard = ({ task }) => {
    // eslint-disable-next-line
    const { description, isFavorite, createdDate, bgColor } = task;

    const { setUpdateTask, deleteTaskItem, setFavoriteTaskItem } =
        useContext(TaskContext);

    return (
        <AnimatePresence mode="wait">
            <NoteCardContainer
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
                    <CardDate>{formatedDate(createdDate)}</CardDate>
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
            </NoteCardContainer>
        </AnimatePresence>
    );
};

export default NoteCard;
