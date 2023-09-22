import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/main-layout/main-layout.component';
import DashboardLayout from './layouts/dashboard-layout/dashboard-layout.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sigin-in/sigin-in.component';
import SignUp from './routes/sigin-up/sigin-up.component';
import Welcome from './routes/welcome/welcome.component';
import Settings from './routes/settings/settings.component';
import Notes from './routes/notes/notes.component';

const App = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="dashboard/*" element={<DashboardLayout />}>
            <Route index element={<Welcome />} />
            <Route path="notes" element={<Notes />} />
            <Route path="settings" element={<Settings />} />
        </Route>
    </Routes>
);

export default App;
