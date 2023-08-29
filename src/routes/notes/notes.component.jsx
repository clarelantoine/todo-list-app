import { useContext } from 'react';
import NoteCard from '../../components/note-card/note-card.component';
import { TaskContext } from '../../contexts/task.context';
import { NotesContainer } from './notes.styles.jsx';

const Notes = () => {
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
    return <NotesContainer>{displayTasks()}</NotesContainer>;
};

export default Notes;
