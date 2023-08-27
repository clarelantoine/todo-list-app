import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Dashboard from './routes/dashboard/dashboard.component';
import NotePreview from './components/note-preview/note-preview.component';
import MainLayout from './layouts/main-layout/main-layout.component';

const App = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="auth" element={<Authentication />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<p>Welcome Page</p>} />
            <Route path="notes" element={<NotePreview />} />
        </Route>
    </Routes>
);

export default App;
