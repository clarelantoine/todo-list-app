import { createContext, useEffect, useState } from 'react';

// add new task item handler logic
const addTaskItemHandler = (tasks, taskToAdd) => [taskToAdd, ...tasks];

// delete task item handle logic
const deleteTaskItemHandler = (tasks, taskToDelete) =>
    tasks.filter((task) => task.id !== taskToDelete.id);

/**
 * Delete task item
 * Update task item
 */

export const TaskContext = createContext({
    tasks: [],
    setTasks: () => {},
    addTaskItem: () => {},
    deleteTaskItem: () => {},
});

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTaskItem = (taskToAdd) => {
        const newTasksArray = addTaskItemHandler(tasks, taskToAdd);
        setTasks(newTasksArray);
    };

    const deleteTaskItem = (taskToDelete) => {
        const newTasksArray = deleteTaskItemHandler(tasks, taskToDelete);
        setTasks(newTasksArray);
    };

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    const value = { tasks, setTasks, addTaskItem, deleteTaskItem };

    return (
        <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    );
};
