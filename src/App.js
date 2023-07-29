import Contents from './components/contents/contents.component';
import Sidebar from './components/sidebar/sidebar.component';

import { AppContainer } from './App.styles.jsx';

const App = () => (
    <AppContainer>
        <Sidebar />
        <Contents />
    </AppContainer>
);

export default App;
