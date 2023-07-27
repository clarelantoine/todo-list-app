import { useContext } from 'react';
import { TaskContext } from '../../contexts/task.context';
import './todo-card.styles.scss';

const TodoCard = ({ task }) => {
    const { id, title, description, categories } = task;

    const { deleteTaskItem } = useContext(TaskContext);
    return (
        <div className="todo__card">
            <div className="todo__card__wrapper">
                <span className="todo__card__title">{`Task: ${id} / ${title}`}</span>
                {/* <p className="todo__card__description">{description}</p> */}
                {/* <p className="todo__card__categories">{categories}</p> */}
                <span onClick={() => deleteTaskItem(task)}>X</span>
            </div>
        </div>
    );
};
export default TodoCard;
