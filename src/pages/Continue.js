import { useNavigate } from "react-router-dom";
import { Flex, Button, Stack, Text }  from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

function Continue() {
    const navigate = useNavigate();

    return(
        <>
            <Flex
                justify="center"
                align="center"
                height="100vh"
                direction="column"
            >
                <Text
                    fontSize="35px"
                    fontFamily="Poppins"
                    marginBottom="50px"
                    color="#2b4242"
                >
                    Let's start the quiz ?
                </Text>
                <Stack>
                    <Button
                        width="200px"
                        height="34px"
                        background="#606a6a"
                        border="none"
                        borderRadius="4px"
                        color="white"
                        fontSize="17px"

                        onClick={() => {
                            navigate("/questionary")
                        }}
                    >Start</Button>
                    <Button
                        width="200px"
                        height="34px"
                        background="#fff"
                        border="1px solid #606a6a"
                        borderRadius="4px"
                        color="#606a6a"
                        fontSize="17px"
                        leftIcon={<ArrowBackIcon />}
                        onClick={() => {
                            navigate("/")
                        }}
                    >Cancel</Button>
                </Stack>
            </Flex>
        </>
    );
};

export default Continue;