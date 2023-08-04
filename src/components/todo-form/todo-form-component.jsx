import { useContext, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { TaskContext } from '../../contexts/task.context';

import './todo-form.styles.scss';
import { APP_DATA } from '../../app-data';

const TodoForm = () => {
    const { categories } = APP_DATA;
    // states for form fields
    const [task, setTask] = useState('');

    // get random category from APP_DATA
    const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];

    // get add task function from context
    const { addTaskItem } = useContext(TaskContext);

    // on form field change event handler
    const onChangeHandler = (event) => {
        const { value } = event.target;

        setTask(value);
    };

    // reset form handler
    const resetFormHandler = () => setTask('');

    // on form submit event handler
    const addTaskItemHandler = () => {
        // create task object

        // form validation (check is task value if empty)
        if (!task.trim().length) return alert('Invalid Task');

        // create the task object to add
        const taskObject = {
            id: crypto.randomUUID(),
            title: randomCategory.title,
            description: task,
            categoryId: randomCategory.id,
            createdDate: new Date(),
            bgColor: randomCategory.color,
            isFavorite: false,
        };

        addTaskItem(taskObject);
        resetFormHandler();
    };

    return (
        <div className="todo__form">
            <div className="todo__form__wrapper">
                <FormInput
                    name="description"
                    type="text"
                    placeholder="Add a task"
                    onChange={onChangeHandler}
                    value={task}
                />

                <button type="button" onClick={addTaskItemHandler}>
                    Add task
                </button>
            </div>
        </div>
    );
};

export default TodoForm;
