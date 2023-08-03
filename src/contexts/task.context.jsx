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

// get filtered tasks (search) handler logic
const getfilteredTask = (tasks, str) =>
    tasks.filter((task) =>
        task.description.toLowerCase().includes(str.toLowerCase())
    );

// set task item to favarite handler logic
const setFavoriteTaskItemHandler = (tasks, favoriteTask) =>
    tasks.map((task) =>
        task.id === favoriteTask.id
            ? { ...task, isFavorite: !task.isFavorite }
            : task
    );

/**
 * TO-DO
 * Update task item
 */

export const TaskContext = createContext({
    tasks: [],
    filteredTasks: [],
    addTaskItem: () => {},
    deleteTaskItem: () => {},
    searchTask: () => {},
    setFavoriteTaskItem: () => {},
});

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(getInitialTaskState);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [searchStr, setSearchStr] = useState('');

    // add task handler
    const addTaskItem = (taskToAdd) => {
        const newTasksArray = addTaskItemHandler(tasks, taskToAdd);
        setTasks(newTasksArray);
    };

    // delete task handler
    const deleteTaskItem = (taskToDelete) => {
        const newTasksArray = deleteTaskItemHandler(tasks, taskToDelete);
        setTasks(newTasksArray);
    };

    // search tasks handler (onChange event)
    const searchTask = (str) => {
        setSearchStr(str);
    };

    // set task as favorite
    const setFavoriteTaskItem = (favoriteTask) => {
        const newTasksArray = setFavoriteTaskItemHandler(tasks, favoriteTask);
        setTasks(newTasksArray);
    };

    // update localStorage when state update
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const newFilteredTasksArray = getfilteredTask(tasks, searchStr);
        setFilteredTasks(newFilteredTasksArray);
    }, [searchStr, tasks]);

    const value = {
        tasks,
        filteredTasks,
        addTaskItem,
        deleteTaskItem,
        searchTask,
        setFavoriteTaskItem,
    };

    return (
        <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    );
};
