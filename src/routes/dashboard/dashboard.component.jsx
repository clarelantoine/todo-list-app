import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../../layouts/dashboard-layout/dashboard-layout.component';
import NotePreview from '../../components/note-preview/note-preview.component';
import Welcome from '../welcome/welcome.component';
import Settings from '../settings/settings.component';

const Dashboard = () => (
    <Routes>
        <Route path="/*" element={<DashboardLayout />}>
            <Route index element={<Welcome />} />
            <Route path="notes" element={<NotePreview />} />
            <Route path="settings" element={<Settings />} />
        </Route>
    </Routes>
);
export default Dashboard;
