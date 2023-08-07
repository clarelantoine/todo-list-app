import { useContext, useEffect, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { TaskContext } from '../../contexts/task.context';

import { APP_DATA } from '../../app-data';
import {
    AddNoteFormContainer,
    CategoryField,
    CategoryFieldGroup,
    CategoryFieldOption,
} from './todo-form.styles';

/**
 * can refactor this category object
 */
const initialFormValue = {
    description: '',
    category: '',
};

const TodoForm = ({ isTodoForm, setIsTodoForm }) => {
    const { categories } = APP_DATA;
    // states for form fields
    const [task, setTask] = useState(initialFormValue);
    const [isDisabled, setIsDisabled] = useState(true);

    // get add task function from context
    const { addTaskItem } = useContext(TaskContext);

    // get selected category object
    const selelectedCategory = categories.find(
        (category) => category.id === task.category
    );

    // handle isDisabled state
    useEffect(() => {
        task.description.trim().length > 3 && task.category
            ? setIsDisabled(false)
            : setIsDisabled(true);
    }, [task]);

    // onChange description field event handler
    const onChangeDescriptionFiedlHandler = (event) => {
        const { value } = event.target;
        setTask({ ...task, description: value });
    };

    // onClick category field event handler
    const onClickCategoryFieldHandler = (categoryID) => {
        setTask({ ...task, category: categoryID });
    };

    // reset form handler
    const resetFormHandler = () => setTask(initialFormValue);

    // on form submit event handler
    const addTaskItemHandler = () => {
        // create task object

        // form validation (check is task value if empty)
        // if (!task.trim().length) return alert('Invalid Task');

        // create the task object to add
        const taskObject = {
            id: crypto.randomUUID(),
            title: selelectedCategory.title,
            description: task.description,
            categoryId: task.category,
            createdDate: new Date(),
            bgColor: selelectedCategory.color,
            isFavorite: false,
        };

        addTaskItem(taskObject);
        resetFormHandler();
        setIsTodoForm(!isTodoForm);
    };

    return (
        <AddNoteFormContainer>
            {/* <FormInput
                name="description"
                type="text"
                placeholder="Add a task"
                onChange={onChangeHandler}
                value={task}
            /> */}
            <textarea
                name="description"
                type="text"
                placeholder="Note description..."
                onChange={onChangeDescriptionFiedlHandler}
                value={task.description}
            />

            <CategoryField>
                <p>Select a category color:</p>
                <CategoryFieldGroup>
                    {categories.map((category) => (
                        <CategoryFieldOption
                            key={category.id}
                            $color={category.color}
                            $isActive={category.id === task.category}
                            onClick={() =>
                                onClickCategoryFieldHandler(category.id)
                            }
                        />
                    ))}
                </CategoryFieldGroup>
            </CategoryField>
            <button
                className="add-button"
                type="button"
                onClick={addTaskItemHandler}
                disabled={isDisabled}
            >
                Add
            </button>
        </AddNoteFormContainer>
    );
};

export default TodoForm;
