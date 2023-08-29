import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../../layouts/dashboard-layout/dashboard-layout.component';
import Welcome from '../welcome/welcome.component';
import Settings from '../settings/settings.component';
import Notes from '../notes/notes.component';

const Dashboard = () => (
    <Routes>
        <Route path="/*" element={<DashboardLayout />}>
            <Route index element={<Welcome />} />
            <Route path="notes" element={<Notes />} />
            <Route path="settings" element={<Settings />} />
        </Route>
    </Routes>
);
export default Dashboard;
