import { createContext, useEffect, useState } from 'react';

// add new task item handler
const addTaskItemHandler = (tasks, taskToAdd) => [...tasks, taskToAdd];

/**
 * Delete task item
 * Update task item
 */

export const TaskContext = createContext({
    tasks: [],
    setTasks: () => {},
    addTaskItem: () => {},
});

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTaskItem = (taskToAdd) => {
        const newTasksArray = addTaskItemHandler(tasks, taskToAdd);
        setTasks(newTasksArray);
    };

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    const value = { tasks, setTasks, addTaskItem };

    return (
        <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    );
};
