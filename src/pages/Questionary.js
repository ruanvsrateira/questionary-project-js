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

            if(inputTrue.checked && inputFalse.checked) {
                sendsUser.push("Not")
            } else if(inputTrue.checked) {
                sendsUser.push("True")
            }else if(inputFalse.checked) {
                sendsUser.push("false")
            }else {
                sendsUser.push("Not")
            }

            localStorage.setItem("questionary", {
                questions: [
                    questions.question
                ],
                
                your_sends: [
                    ...sendsUser
                ]
            });

        }

        setSendsUser(sendsUser);
        navigate("/yourSends")
        
    }

    return(
        <>
            <Box
                width="60%"
                height="100vh"
                margin="auto"
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
                                    color="#2b4242"
                                >
                                    {counter++} - {question.question}
                                </Text>
                                <br />

                                
                                    <Flex
                                    
                                    >
                                        <Flex
                                            width="60px"
                                            align="center"
                                            justify="space-around"
                                        >
                                            <input type="checkbox" className="true" value="true"/>
                                            <Text>True</Text>
                                        </Flex>
                                        <Flex
                                            width="60px"
                                            align="center"
                                            justify="space-around"
                                        >
                                            <input type="checkbox" className="false" value="false"/>
                                            <Text>False</Text>
                                        </Flex>
                                    </Flex>
                                
                             
                                <br /><br />
                            </Box>
                        );
                    })}
                    <Button
                        type="submit"
                        width="200px"
                        height="40px"
                        background="#606a6a"
                        border="none"
                        fontFamily="Poppins"
                        borderRadius="4px"
                        color="#fff"
                        fontSize="17px"
                        cursor="pointer"
                        onClick={() => {setSends(counter)}}

                        _hover={{   
                            background: "#444c4c",
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