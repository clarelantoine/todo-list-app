import './todo-card.styles.scss';

const TodoCard = ({ task }) => {
    const { title, description, categories } = task;

    return (
        <div className="todo__card">
            <div className="todo__card__wrapper">
                <span className="todo__card__title">{title}</span>
                {/* <p className="todo__card__description">{description}</p> */}
                {/* <p className="todo__card__categories">{categories}</p> */}
            </div>
        </div>
    );
};
export default TodoCard;
