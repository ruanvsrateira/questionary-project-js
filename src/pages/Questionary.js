import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import {
    QuestionsContext
} from "../contexts/questions";

function Questionary() {
    const { questions } = useContext(QuestionsContext);

    return(
        <>
            <Box
                width="60%"
                height="100vh"
                margin="auto"
                background=""   
            >
                <Text
                    fontSize="30px"
                >
                    Quantos anos vc tem quando soube que era uma pessoa ?
                </Text>

                
            </Box>
        </>
    );
}

export default Questionary;