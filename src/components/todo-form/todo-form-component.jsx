import FormInput from '../form-input/form-input.component';
import './todo-form.styles.scss';

const TodoForm = ({ handleAddTask, handleChange }) => (
    <div className="todo__form">
        <div className="todo__form__wrapper">
            <FormInput
                name="title"
                type="text"
                placeholder="Add a task"
                onChange={handleChange}
            />

            <button type="button" onClick={handleAddTask}>
                Add task
            </button>
        </div>
    </div>
);

export default TodoForm;
