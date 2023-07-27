import { useContext } from 'react';

import { TaskContext } from '../../contexts/task.context';
import {
    CloseButton,
    TodoCardContainer,
    TodoCardWrapper,
} from './todo-card.styles.jsx';

const TodoCard = ({ task }) => {
    // eslint-disable-next-line
const { description, categories } = task;

    const { deleteTaskItem } = useContext(TaskContext);
    return (
        <TodoCardContainer>
            <TodoCardWrapper>
                <p>{description}</p>
                {/* <p className="todo__card__categories">{categories}</p> */}
            </TodoCardWrapper>
            <CloseButton onClick={() => deleteTaskItem(task)} />
        </TodoCardContainer>
    );
};
export default TodoCard;
