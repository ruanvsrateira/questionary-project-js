import { Button, ButtonGroup, Flex, Input, Text, Spinner, background } from '@chakra-ui/react';
import { ArrowRightIcon, SpinnerIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { QuestionsContext } from '../contexts/questions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const { questions, setQuestions } = useContext(QuestionsContext);

    const findQuestions = () => {
        const inputValue = getNumberOfInput();

        axios.get(`https://opentdb.com/api.php?amount=${inputValue}.`)
            .then(({data}) => {
                setQuestions(data.results);
                navigate("/questionary");
            }).catch(e => console.log(e));

    }

    const getNumberOfInput = () => {
        const valueInput = document.getElementById("number-questions").value;

        return valueInput;
    }

    return(
        <>
            <Flex
                justify="center"
                align="center"
                width="100%"
                height="100vh"
            >
                <Flex 
                    justify='center'
                    direction="column"
                >
                    <Text
                        fontSize="22px"
                        fontFamily="sans-serif"
                    >
                        Quantas Perguntas você quer responder ?
                    </Text>
                    <Input
                        placeholder="Exemplo: 12"
                        height="25px"
                        id='number-questions'
                    />
                    <Button 
                        colorScheme='blue'
                        background="#385898"
                        color="white"
                        height='34px'
                        mt="20px"
                        border='none'
                        borderRadius="3px"
                        variant="outline"
                        cursor="pointer"
                        rightIcon={<ArrowRightIcon/>}
                        onClick={findQuestions}

                        _hover={{
                            background: "white",
                            border: "1px solid #385898",
                            color: "#385898",
                            transition: "800ms"
                        }}
                    >
                        Continuar
                    </Button>
                </Flex>
            </Flex>
        </>
    );
};

export default Home;