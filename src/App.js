import TodoPreview from './components/todo-preview/todo-preview.component';
import TodoForm from './components/todo-form/todo-form-component';
import './App.scss';

const App = () => (
    <div className="todo__app">
        <h1 className="todo__app__title">Notes</h1>
        <TodoForm />
        <TodoPreview />
    </div>
);

export default App;
