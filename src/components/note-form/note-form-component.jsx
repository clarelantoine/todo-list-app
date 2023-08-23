import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../contexts/task.context';

import { APP_DATA } from '../../app-data';
import {
    AddNoteFormContainer,
    CategoryField,
    CategoryFieldGroup,
    CategoryFieldOption,
} from './note-form.styles';

const { categories } = APP_DATA;

const NoteForm = () => {
    // initiak task value
    const initialFormValues = {
        id: crypto.randomUUID(),
        title: '',
        description: '',
        categoryId: '',
        createdDate: new Date(),
        bgColor: '',
        isFavorite: false,
    };

    // get add task function from context
    const {
        addTaskItem,
        updateTask,
        setShowModal,
        setUpdateTask,
        updateTaskItem,
    } = useContext(TaskContext);

    // states for form fields
    const [task, setTask] = useState(updateTask || initialFormValues);
    const [isDisabled, setIsDisabled] = useState(true);

    // handle isDisabled state
    useEffect(() => {
        task.description.trim().length > 3 && task.categoryId
            ? setIsDisabled(false)
            : setIsDisabled(true);
    }, [task]);

    // onChange description field event handler
    const onChangeDescriptionFiedlHandler = (event) => {
        const { value } = event.target;
        setTask({ ...task, description: value });
    };

    // onClick category field event handler
    const onClickCategoryFieldHandler = (category) => {
        const { id, title, color } = category;
        setTask({ ...task, categoryId: id, title, bgColor: color });
    };

    // reset form handler
    const resetFormHandler = () => {
        setTask(initialFormValues);
        setUpdateTask('');
        setShowModal(false);
    };

    // on form submit event handler
    const formActionHandler = () => {
        // create task object

        // form validation (check is task value if empty)
        // if (!task.trim().length) return alert('Invalid Task');

        updateTask ? updateTaskItem(task, updateTask) : addTaskItem(task);
        resetFormHandler();
    };

    return (
        <AddNoteFormContainer>
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
                            $isActive={category.id === task.categoryId}
                            onClick={() =>
                                onClickCategoryFieldHandler(category)
                            }
                        />
                    ))}
                </CategoryFieldGroup>
            </CategoryField>
            <button
                className="add-button"
                type="button"
                onClick={formActionHandler}
                disabled={isDisabled}
            >
                {updateTask ? 'Update' : 'Add'}
            </button>
        </AddNoteFormContainer>
    );
};

export default NoteForm;
