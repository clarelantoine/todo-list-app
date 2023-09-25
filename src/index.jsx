import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { TaskProvider } from './contexts/task.context';
import { GlobalStyles } from './index.styles.jsx';

import reportWebVitals from './reportWebVitals';
import { store, persistor } from './store/store';

const theme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <TaskProvider>
                    <BrowserRouter>
                        <ThemeProvider theme={theme}>
                            <GlobalStyles />
                            <App />
                        </ThemeProvider>
                    </BrowserRouter>
                </TaskProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
