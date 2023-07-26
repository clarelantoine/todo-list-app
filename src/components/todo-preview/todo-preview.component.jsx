import TodoCard from '../todo-card/todo-card.component';
import './todo-preview.styles.scss';

const TodoPreview = ({ tasks }) => (
    <div className="todo__preview">
        {tasks.map((task, index) => (
            <TodoCard key={index} task={task} />
        ))}
    </div>
);

export default TodoPreview;
