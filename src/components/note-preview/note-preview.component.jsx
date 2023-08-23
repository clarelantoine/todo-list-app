import { useContext } from 'react';
import NoteCard from '../note-card/note-card.component';
import { TaskContext } from '../../contexts/task.context';
import { NotePreviewContainer } from './note-preview.styles.jsx';

const NotePreview = () => {
    // get task and filteredTasks from context
    const { tasks, filteredTasks } = useContext(TaskContext);

    // display tasks logic
    const displayTasks = () => {
        if (tasks.length) {
            if (filteredTasks.length) {
                return filteredTasks.map((task) => (
                    <NoteCard key={task.id} task={task} />
                ));
            }

            return <p>No notes found...</p>;
        }

        return <p>You have no task yet...</p>;
    };
    return <NotePreviewContainer>{displayTasks()}</NotePreviewContainer>;
};

export default NotePreview;
