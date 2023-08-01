import { useContext } from 'react';
import TodoCard from '../todo-card/todo-card.component';
import { TaskContext } from '../../contexts/task.context';
import { TodoPreviewContainer } from './todo-preview.styles.jsx';

const TodoPreview = () => {
    // get task and filteredTasks from context
    const { tasks, filteredTasks } = useContext(TaskContext);

    // display tasks logic
    const displayTasks = () => {
        if (tasks.length) {
            if (filteredTasks.length) {
                return filteredTasks.map((task, index) => (
                    <TodoCard key={index} task={task} />
                ));
            }

            return <p>No notes found...</p>;
        }

        return <p>You have no task yet...</p>;
    };
    return <TodoPreviewContainer>{displayTasks()}</TodoPreviewContainer>;
};

export default TodoPreview;
