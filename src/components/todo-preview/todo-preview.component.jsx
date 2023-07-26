import { useContext } from 'react';
import TodoCard from '../todo-card/todo-card.component';
import './todo-preview.styles.scss';
import { TaskContext } from '../../contexts/task.context';

const TodoPreview = () => {
    // get task from context
    const { tasks } = useContext(TaskContext);

    return (
        <div className="todo__preview">
            {tasks.map((task, index) => (
                <TodoCard key={index} task={task} />
            ))}
        </div>
    );
};

export default TodoPreview;
