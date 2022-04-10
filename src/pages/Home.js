import { Button,
    Flex, 
    Input, 
    Text, 
    Spinner,
    Alert,
    AlertIcon,
    Box,
    Link
} from '@chakra-ui/react';
import { useContext } from 'react';
import { QuestionsContext } from '../contexts/questions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SendsUserContext } from '../contexts/sendsUser';

function Home() {
    const navigate = useNavigate();
    const { msg } = useContext(SendsUserContext)
    const { setQuestions } = useContext(QuestionsContext);

    const findQuestions = () => {
        const spinner = document.querySelector(".spinner");
        spinner.style.display = "block"
        const inputValue = getNumberOfInput();

        axios.get(`https://opentdb.com/api.php?amount=${inputValue}&difficulty=hard&type=boolean`)
            .then(({data}) => {
                setQuestions(data.results)
                navigate("/continue");
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
                    backgroundColor="#fff"
                    borderRadius="10"
                    boxShadow="box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
                >
                    
                <Alert status='info'
                    mb="30px"
                >
                        <AlertIcon
                            width="30px"
                            height="30px"
                            color="royalblue"
                        />
                        <Text
                            fontFamily="Poppins"
                            fontSize="20px"
                            ml="5px"
                        >                            
                            Enter a number less than or equal to 50
                        </Text>
                </Alert>
                    
                     
                    <Text
                        fontSize="30px"
                        fontFamily="Poppins"
                        color="#2b4242"
                        marginBottom="10px"
                    >
                        How many questions do you want to answer ?
                    </Text>
                    <Input
                        placeholder="Exemplo: 12"
                        height="30px"
                        paddingLeft="25px"
                        borderRadius="4"
                        id='number-questions'
                        border="1px solid #828383"
                        type="number"

                        _focus={{
                            boxShadow: "0 0 0 0",
                            outline: "0",
                        }}
                    />
                    <Button
                        colorScheme='blue'
                        background="#606a6a"
                        color="white"
                        height='40px'
                        mt="30px"
                        border='none'
                        borderRadius="3px"
                        variant="outline"
                        cursor="pointer"
                        className="buttonNext"
                        onClick={findQuestions}
                        _hover={{
                            background: "#444c4c",
                            transition: "300ms"
                        }}
                    >
                        NEXT
                        <Spinner
                            width="20px"
                            height="20px"
                            ml="15px"
                            display="none"
                            color="#fff"
                        className="spinner"
                        />
                    </Button>

                    <Text
                        mt="30px"
                        fontSize="25px"
                        fontFamily="Poppins"
                        color="#2b4242"
                    >
                        Load questionary
                    </Text>

                    <Flex
                        border="1px solid #2b4242"
                        padding="15px"
                        borderRadius="4px"
                        align="center"
                    >
                        <Text
                            fontSize="17px"
                            fontFamily="Poppins"
                            fontWeight="bold"
                        >
                            <Link href="#"
                                color="royalblue"
                                textDecoration="none"
                                fontWeight="bolder"
                            >
                                Last Questionary
                            </Link>
                        </Text>
                    </Flex>
                    
                </Flex>
            </Flex>
        </>
    );
};

export default Home;