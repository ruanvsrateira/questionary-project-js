import { Button,
    Flex, 
    Input, 
    Text, 
    Alert,
    AlertIcon,
    Link,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { BiCheck, BiBlock } from 'react-icons/bi'
import { useContext } from 'react';
import { QuestionsContext } from '../contexts/questions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from 'react-toastify';

if(window !== "undefined") {
    injectStyle();
}

function Home() {
    const navigate = useNavigate();
    const { setQuestions } = useContext(QuestionsContext);

    const findQuestions = () => {
        const inputValue = getNumberOfInput();

        if(!inputValue) {
            toast.error("The field is invalid", { position: toast.POSITION.TOP_LEFT });
            return;
        }

        if(inputValue > 50 || inputValue <= 0) {
            toast.error("The number must be less than 50 and greater than 0", { position: toast.POSITION.TOP_LEFT })
            return;
        }

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

            <ToastContainer />
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
                    <Flex>
                        <Input
                            placeholder="Exemplo: 12"
                            height="30px"
                            width="90%"
                            paddingLeft="25px"
                            borderRadius="4px 0px 0px 4px"
                            id='number-questions'
                            border="1px solid #828383"
                            type="number"
                            _focus={{
                                boxShadow: "0 0 0 0",
                                outline: "0",
                            }}
                        />
                        <Button
                            className="buttonSearch"
                            background="royalblue"
                            color="#fff"
                            fontSize="15px"
                            border="none"
                            paddingX="10px"
                            borderRadius="0px 4px 4px 0px"
                            cursor="pointer"
                            rightIcon={<SearchIcon />}
                            onClick={findQuestions}
                        >
                            Search
                        </Button>
                    </Flex>
                    
                    {localStorage.getItem("sendsUser") ? (
                    <>
                        <Text
                            mt="30px"
                            fontSize="25px"
                            fontFamily="Poppins"
                            color="#2b4242"
                        >
                            Load questionary
                        </Text>

                        <Flex
                            border="1px solid #7d7e7e"
                            padding="15px"
                            borderRadius="4px"
                            align="center"
                            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
                        >
                            <Text
                                fontSize="17px"
                                fontFamily="Poppins"
                                fontWeight="bold"
                            >
                                <Link href="/lastQuestionary"
                                    color="royalblue"
                                    textDecoration="none"
                                    fontWeight="bolder"
                                >
                                    Last Questionary
                                </Link>
                            </Text>
                            <Flex
                                ml="20px"
                                width="60px"
                                justify="space-around"
                            >
                                <Flex
                                    align="center"
                                    fontSize="20px"
                                    color="#198754"
                                >
                                    {localStorage.getItem("acertos")}
                                    <BiCheck />
                                </Flex>

                                <Flex
                                    align="center"
                                    fontSize="20px"
                                    color="#dc3545"
                                >
                                    {localStorage.getItem("erros")}
                                    <BiBlock 
                                        fontSize="18px"
                                    />    
                                </Flex>
                            </Flex>
                        </Flex>
                    </>
                        
                        
                    ) : (
                        
                        <Text
                            mt="20px"
                            fontSize="22px"
                            fontFamily="Poppins"

                        >
                            Nenhum questionário salvo
                        </Text>
                  
                    )}
                    
                    
                </Flex>
            </Flex>
        </>
    );
};

export default Home;