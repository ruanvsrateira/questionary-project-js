import { createContext, useState } from "react";

export const QuestionsContext = createContext();

function QuestionsProvider({ children }) {
    const [questions, setQuestions] = useState([]);

    return(
        <QuestionsContext.Provider value={{ questions, setQuestions }}>
            { children }
        </QuestionsContext.Provider>
    );
};

export default QuestionsProvider;