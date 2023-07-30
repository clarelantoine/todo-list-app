import { useContext } from 'react';
import TodoCard from '../todo-card/todo-card.component';
import { TaskContext } from '../../contexts/task.context';
import { TodoPreviewContainer } from './todo-preview.styles.jsx';

const TodoPreview = () => {
    // get task from context
    const { tasks, filteredTasks } = useContext(TaskContext);

    const displayTasks = () => {
        if (tasks.length) {
            if (filteredTasks.length) {
                return filteredTasks.map((task, index) => (
                    <TodoCard key={index} task={task} />
                ));
            }
            return tasks.map((task, index) => (
                <TodoCard key={index} task={task} />
            ));
        }

        return <p>You have no task yet...</p>;
    };
    return <TodoPreviewContainer>{displayTasks()}</TodoPreviewContainer>;
};

export default TodoPreview;
