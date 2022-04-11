/* eslint-disable no-lone-blocks */
import { Box, Flex, Text, Button, Link } from '@chakra-ui/react';
import { BiBlock, BiCheck} from 'react-icons/bi';
import { FaHome } from 'react-icons/fa'
import React from 'react';

function LastQuestionary() {
    const questions = localStorage.getItem("questions");
    const questionsObj = JSON.parse(questions);
    
    const sendsUser = localStorage.getItem("sendsUser");
    const sendsUserArr = JSON.parse(sendsUser);

    let counterQuestion = 1;
    let counterKey = 0;
    let acertos = 0;
    let erros = 0;
    let counterKeyShowText = 0;

    questionsObj.map(q => {
        if(sendsUserArr[counterKey++] == q.correct_answer) {
            return acertos++     
        } else {
            return erros++
        }  
    })

    return(
        <>
            <Flex
                justify='center'
                direction="column"
                width="100%"
            >
                <Flex
                    margin="auto"
                    width="60%"
                    mt="50px"
                    justify='center'
                    direction="column"
                >
                    <Flex
                        justify="center"
                        align="center"
                    >
                        <Flex
                            align="center"
                        >
                            <Text
                                fontSize="50px"
                                color="#198754"
                            >
                                {acertos}
                            </Text>
                            <BiCheck
                                fontSize="50px"
                                color="#198754"
                            />
                        </Flex>

                        <Flex
                            align="center"
                        >
                            <Text
                                fontSize="50px"
                                color="#dc3545"
                            >
                                {erros}
                            </Text>
                            <BiBlock
                                fontSize="40px"
                                ml="3px"
                                color="#dc3545"
                            />
                        </Flex>
                    </Flex>
                    {questionsObj.map(question => {

                        return(
                            <Box marginY="20px">
                                <Text
                                    fontSize="20px"
                                    fontFamily="Poppins"
                                    color="#121212"
                                >
                                    {counterQuestion++} - {question.question}
                                </Text>

                                <Text
                                    fontSize="20px"
                                    fontWeight="600"
                                    fontFamily="Poppins"
                                >
                                    
                                    { question.correct_answer == sendsUserArr[counterKeyShowText++] ? (
                                             
                                        <Text
                                            color="#198754"
                                        >
                                            Correct <BiCheck />
                                        </Text>
                                        
                                    ): (
                                        <Text
                                            color="#dc3545"
                                        >
                                            Incorrect <BiBlock />
                                        </Text>
                                    )}
                                </Text>
                            </Box>        
                        );
                    })}

                    <Link
                        href="/"
                        textDecor="none"
                    >
                        <Button
                            height="35px"
                            border="none"
                            background="royalblue"
                            borderRadius="5px"
                            color="#fff"
                            rightIcon={<FaHome />}
                            fontSize="15px"
                            width="150px"
                            cursor="pointer"
                        >
                            Back to home
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </>
    );
};

export default LastQuestionary;