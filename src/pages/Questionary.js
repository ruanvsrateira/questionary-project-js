import { Box, Button, Text, Flex, Input } from "@chakra-ui/react";
import { useContext } from "react";
import {
    QuestionsContext
} from "../contexts/questions";
import { SendsUserContext } from '../contexts/sendsUser';
import { useNavigate } from 'react-router-dom';

function Questionary() {
    const { questions } = useContext(QuestionsContext);
    const { setSendsUser } = useContext(SendsUserContext);
    const navigate = useNavigate();

    let counter = 1;

    console.log(questions)

    const setSends = (counter) => {
        counter --;
        const sendsUser = [];

        for(let counterBox = 1; counterBox <= counter; counterBox++) {
            const counterClass = `.question${counterBox}`
            const box = document.querySelector(counterClass);
            const inputTrue = box.querySelector(".true");
            const inputFalse = box.querySelector(".false");
            let counterKey = 0;
            let acertos = 0;
            let erros = 0;

            if(inputTrue.checked && inputFalse.checked) {
                sendsUser.push("Not")
            } else if(inputTrue.checked) {
                sendsUser.push("True")
            }else if(inputFalse.checked) {
                sendsUser.push("false")
            }else {
                sendsUser.push("Not")
            }

            if(localStorage.getItem("questionary")) {
                localStorage.removeItem("questionary");
            }

            questions.map(q => {
                if(sendsUser[counterKey++] == q.correct_answer) {
                    return acertos++     
                } else {
                    return erros++
                }  
            });


            console.log("questions", JSON.stringify(questions));
            localStorage.setItem("acertos", JSON.stringify(acertos));
            localStorage.setItem("erros", JSON.stringify(erros));
            localStorage.setItem("questions", JSON.stringify(questions));
            localStorage.setItem("sendsUser", JSON.stringify(sendsUser));

        }

        setSendsUser(sendsUser);
        navigate("/yourSends")
        
    }

    return(
        <>
            <Box
                width="60%"
                margin="50px auto"
                background=""   
            >
                    {questions.map(question => {
            
                        return(

                            <Box
                                className={`question${counter}`}
                            >
                                <Text
                                    fontSize="25px"
                                    fontFamily="Poppins"
                                    color="#121212"
                                >
                                    {counter++} - {question.question}
                                </Text>
                                <br />
                                    <Flex>
                                        <Flex
                                            width="60px"
                                            align="center"
                                            justify="space-around"
                                        >
                                            <input type="checkbox" className="true" value="true"/>
                                            <Text
                                                color="#121212"
                                                fontFamily="Poppins"
                                            >True</Text>
                                        </Flex>
                                        <Flex
                                            width="60px"
                                            align="center"
                                            justify="space-around"
                                        >
                                            <input type="checkbox" className="false" value="false"/>
                                            <Text
                                                fontFamily="Poppins"
                                                color="#121212"
                                            >False</Text>
                                        </Flex>
                                    </Flex>
                                
                             
                                <br />
                                <hr />
                                <br />
                            </Box>
                        );
                    })}
                    <Button
                        type="submit"
                        width="200px"
                        height="35px"
                        background="#4169e1"
                        border="none"
                        fontFamily="Arial"
                        borderRadius="4px"
                        color="#fff"
                        fontSize="17px"
                        cursor="pointer"
                        onClick={() => {setSends(counter)}}

                        _hover={{   
                            background:"#4169e1",
                            transition: "300ms"
                        }}
                    >
                        Send questionary
                    </Button>

                <Flex
                    justify="center"
                    align="center"
                    margin="30px 0px"
                >
                </Flex>
            </Box>
        </>
    );
}

export default Questionary;