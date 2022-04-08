import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuestionsProvider from './contexts/questions';
import Questionary from './pages/Questionary';
import Continue from './pages/Continue';

function MainRoutes() {
    return(
        <QuestionsProvider>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/continue" element={<Continue />} />
                <Route path="/questionary" element={<Questionary />} />
            </Routes>
        </QuestionsProvider>
    );
};

export default MainRoutes;