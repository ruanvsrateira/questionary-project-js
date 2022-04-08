import { useContext } from "react";
import {
    QuestionsContext
} from "../contexts/questions";

function Questionary() {
    const { questions } = useContext(QuestionsContext);

    return(
        <>
            <h1>Questionary</h1>
            {questions.map(question => <span>{question.category}</span>)}
        </>
    );
}

export default Questionary;