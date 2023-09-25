import { Routes, Route, Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MainLayout from './layouts/main-layout/main-layout.component';
import DashboardLayout from './layouts/dashboard-layout/dashboard-layout.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sigin-in/sigin-in.component';
import SignUp from './routes/sigin-up/sigin-up.component';

import Settings from './routes/settings/settings.component';
import Notes from './routes/notes/notes.component';
import { checkUserSession } from './store/user/user.action';
import PageNotFound from './routes/page-not-found/page-not-found.component';

const App = () => {
    const dispatch = useDispatch();

    // check user session
    useEffect(() => {
        dispatch(checkUserSession());
    }, []);

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="dashboard/*" element={<DashboardLayout />}>
                {/* <Route index element={<Welcome />} /> */}
                <Route path="notes" element={<Notes />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/dashboard/notes" />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default App;
