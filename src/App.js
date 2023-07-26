import { useState } from 'react';
import TodoPreview from './components/todo-preview/todo-preview.component';
import TodoForm from './components/todo-form/todo-form-component';
import './App.scss';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        setTasks([...tasks, newTask]);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNewTask({
            title: value,
            description: 'description',
            categories: 'categories',
        });
    };

    return (
        <div className="todo__app">
            <h1>To-Do List App</h1>
            <TodoForm
                handleAddTask={handleAddTask}
                handleChange={handleChange}
            />
            <TodoPreview tasks={tasks} />
        </div>
    );
};

export default App;
