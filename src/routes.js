import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuestionsProvider from './contexts/questions';
import SendsUserProvider from './contexts/sendsUser';
import Questionary from './pages/Questionary';
import Continue from './pages/Continue';
import YourSends from './pages/YourSends';
import LastQuestionary from './pages/LastQuestionary';

function MainRoutes() {
    return(
        <QuestionsProvider>
            <SendsUserProvider>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/continue" element={<Continue />} />
                    <Route path="/questionary" element={<Questionary />} />
                    <Route path="/yourSends" element={<YourSends />} />
                    <Route path="/lastQuestionary" element={<LastQuestionary />} />
                </Routes>
            </SendsUserProvider>
        </QuestionsProvider>
    );
};

export default MainRoutes;