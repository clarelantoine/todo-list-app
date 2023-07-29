import { createContext, useEffect, useState } from 'react';

// add new task item handler logic
const addTaskItemHandler = (tasks, taskToAdd) => [taskToAdd, ...tasks];

// delete task item handle logic
const deleteTaskItemHandler = (tasks, taskToDelete) =>
    tasks.filter((task) => task.id !== taskToDelete.id);

/**
 * TO-DO
 * Update task item
 */

export const TaskContext = createContext({
    tasks: [],
    addTaskItem: () => {},
    deleteTaskItem: () => {},
});

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

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

    // get values from localStorage and set values on initial render
    useEffect(() => {
        const localTasks = JSON.parse(localStorage.getItem('tasks'));
        if (localTasks.length) {
            setTasks(localTasks);
        }
    }, []);

    // update localStorage when state update
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const value = { tasks, addTaskItem, deleteTaskItem };

    return (
        <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    );
};
