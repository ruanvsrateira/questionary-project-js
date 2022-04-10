import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { SendsUserContext } from "../contexts/sendsUser";
import { FaHome } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

function YourSends() {
    const { sendsUser } = useContext(SendsUserContext);
    let counter = 1;
    const navigate = useNavigate();
    
    return(
        <Flex
            width="100%"
            justify="center"
            direction="column"
            paddingBottom="40px"
        >
            <Box>
                <Text
                    fontSize="30px"
                    fontFamily="Poppins"
                    marginY="20px"
                    color="#2b4242"
                    align="center"
                >
                    Your Sends
                </Text>
            </Box>

            {sendsUser.map(send => {
                return(
                    <Box>
                        <Text
                            fontSize="20px"
                            fontFamily="Poppins"
                            align="center"
                        >
                            {counter++} - {send}
                        </Text>
                    </Box>
                );
            })}

            <Box
                display="block"
                height="100px"
                width="300"
                margin="auto"
            >
                <Button
                    width="160px"
                    margin="auto"
                    height="40px"
                    background="#2b4242"
                    color="#fff"
                    fontSize="15px"
                    fontFamily="Poppins"
                    border="none"
                    borderRadius="3px"
                    mt="30px"
                    rightIcon={<FaHome />}
                    cursor="pointer"
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    Return to home
                </Button>
                <br />
                <Button
                    width="160px"
                    margin="auto"
                    height="40px"
                    background="#2b4242"
                    color="#fff"
                    fontSize="15px"
                    fontFamily="Poppins"
                    border="none"
                    borderRadius="3px"
                    mt="10px"
                    cursor="pointer"
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    Show results
                </Button>
            </Box>
        </Flex>
    );
};

export default YourSends;