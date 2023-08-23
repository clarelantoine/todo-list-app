import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TaskProvider } from './contexts/task.context';
import { GlobalStyles } from './index.styles.jsx';
import { UserProvider } from './contexts/user.context';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UserProvider>
            <TaskProvider>
                <BrowserRouter>
                    <GlobalStyles />
                    <App />
                </BrowserRouter>
            </TaskProvider>
        </UserProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
