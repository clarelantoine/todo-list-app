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
const getfilteredTask = (tasks, searchStr) =>
    tasks.filter((task) =>
        task.description.toLowerCase().includes(searchStr.toLowerCase())
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
});

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(getInitialTaskState);
    const [filteredTasks, setFilteredTasks] = useState([]);

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
    const searchTask = (searchStr) => {
        const newFilteredTasksArray = getfilteredTask(tasks, searchStr);
        setFilteredTasks(newFilteredTasksArray);
    };

    // update localStorage when state update
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        console.log(filteredTasks);
    }, [filteredTasks]);

    const value = {
        tasks,
        filteredTasks,
        addTaskItem,
        deleteTaskItem,
        searchTask,
    };

    return (
        <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    );
};
