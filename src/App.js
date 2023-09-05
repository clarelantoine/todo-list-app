import { Routes, Route } from 'react-router-dom';

import Dashboard from './routes/dashboard/dashboard.component';
import Home from './routes/home/home.component';
import MainLayout from './layouts/main-layout/main-layout.component';
import SignIn from './routes/sigin-in/sigin-in.component';
import SignUp from './routes/sigin-up/sigin-up.component';

const App = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="dashboard/*" element={<Dashboard />} />
    </Routes>
);

export default App;
