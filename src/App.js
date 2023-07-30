import { useState } from 'react';
import Contents from './components/contents/contents.component';
import Sidebar from './components/sidebar/sidebar.component';

import { AppContainer } from './App.styles.jsx';

const App = () => {
    const [isTodoForm, setIsTodoForm] = useState(false);
    return (
        <AppContainer>
            <Sidebar setIsTodoForm={setIsTodoForm} isTodoForm={isTodoForm} />
            <Contents isTodoForm={isTodoForm} />
        </AppContainer>
    );
};

export default App;
