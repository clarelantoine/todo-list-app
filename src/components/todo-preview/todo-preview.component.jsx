import { useContext } from 'react';
import TodoCard from '../todo-card/todo-card.component';
import { TaskContext } from '../../contexts/task.context';
import { TodoPreviewContainer } from './todo-preview.styles.jsx';

const TodoPreview = () => {
    // get task from context
    const { tasks } = useContext(TaskContext);

    return (
        <TodoPreviewContainer>
            {tasks.length ? (
                tasks.map((task, index) => <TodoCard key={index} task={task} />)
            ) : (
                <p>You have no task yet...</p>
            )}
        </TodoPreviewContainer>
    );
};

export default TodoPreview;
