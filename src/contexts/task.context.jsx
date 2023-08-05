import { createContext, useEffect, useState } from 'react';

// add new task item handler logic
const addTaskItemHandler = (tasks, taskToAdd) => [taskToAdd, ...tasks];

// delete task item handler logic
const deleteTaskItemHandler = (tasks, taskToDelete) =>
    tasks.filter((task) => task.id !== taskToDelete.id);

// get values from localStorage else return []
const getInitialTaskState = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
};

// check if last last of active category filter
const isLastActiveTaskHandler = (tasks, taskToDelete) => {
    // check if last of the active category filter
    const taskToDeleteCount = tasks.filter(
        (task) => task.categoryId === taskToDelete.categoryId
    );

    return taskToDeleteCount.length === 1;
};

// get filtered tasks (search) handler logic
const getfilteredTask = (tasks, filter) => {
    const { activeCategoryId, searchStr } = filter;

    let result = tasks;

    if (activeCategoryId) {
        result = tasks.filter((task) => task.categoryId === activeCategoryId);
    }

    if (searchStr) {
        result = tasks.filter((task) =>
            task.description.toLowerCase().includes(searchStr.toLowerCase())
        );
    }

    return result;
};

// set task item to favarite handler logic
const setFavoriteTaskItemHandler = (tasks, favoriteTask) =>
    tasks.map((task) =>
        task.id === favoriteTask.id
            ? { ...task, isFavorite: !task.isFavorite }
            : task
    );

const getCategories = (tasks) => [
    ...new Set(
        tasks.map((task) =>
            tasks.find((obj) => obj.categoryId === task.categoryId)
        )
    ),
];

/**
 * TO-DO
 * Update task item
 */

const initialFilterState = {
    activeCategoryId: '',
    searchStr: '',
};

export const TaskContext = createContext({
    tasks: [],
    categories: [],
    filteredTasks: [],
    filter: {},
    isTodoForm: null,
    setFilter: () => {},
    addTaskItem: () => {},
    deleteTaskItem: () => {},
    setFavoriteTaskItem: () => {},
    setIsTodoForm: () => {},
});

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(getInitialTaskState);
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState(initialFilterState);
    const [filteredTasks, setFilteredTasks] = useState([]);

    const [isTodoForm, setIsTodoForm] = useState(false);

    // add task handler
    const addTaskItem = (taskToAdd) => {
        const newTasksArray = addTaskItemHandler(tasks, taskToAdd);
        setTasks(newTasksArray);
    };

    // delete task handler
    const deleteTaskItem = (taskToDelete) => {
        // if last rest activeCategoryId
        const isLastActiveTask = isLastActiveTaskHandler(tasks, taskToDelete);
        const newTasksArray = deleteTaskItemHandler(tasks, taskToDelete);

        if (isLastActiveTask) {
            setFilter({ ...filter, activeCategoryId: '' });
        }

        setTasks(newTasksArray);
    };

    // set task as favorite
    const setFavoriteTaskItem = (favoriteTask) => {
        const newTasksArray = setFavoriteTaskItemHandler(tasks, favoriteTask);
        setTasks(newTasksArray);
    };

    useEffect(() => {
        // update localStorage when state update
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // get / set categories from tasks
        const newCategoriesArray = getCategories(tasks);
        setCategories(newCategoriesArray);
    }, [tasks]);

    useEffect(() => {
        const newFilteredTasksArray = getfilteredTask(tasks, filter);
        setFilteredTasks(newFilteredTasksArray);
    }, [filter, tasks]);

    const value = {
        tasks,
        filteredTasks,
        filter,
        categories,
        isTodoForm,
        setFilter,
        addTaskItem,
        deleteTaskItem,
        setFavoriteTaskItem,
        setIsTodoForm,
    };

    return (
        <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    );
};
