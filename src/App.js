import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import NumButtons from "./components/NumButtons";
import { ResponsesProvider } from "./context/responsesContext";
import ResponseBox from "./components/ResponseBox";
import { useEffect } from "react";
import HowToPlay from "./components/HowToPlay";
import Timer from "./components/Timer";

function generateUniqueFourDigitNumber() {
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let number = "";

  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * digits.length);
    number += digits[index];
    digits.splice(index, 1);
  }
  console.log(number);
  return parseInt(number);
}

function App() {
  const randomNumber = generateUniqueFourDigitNumber();
  useEffect(() => {}, []);
  return (
    <ChakraProvider>
      <ResponsesProvider>
        <Flex h="100vh">
          <Box
            w="70px"
            h="10"
            sx={{ paddingTop: "200px", paddingLeft: "150px" }}
          >
            <HowToPlay />
          </Box>
          <Spacer />
          <Box p={1}>
            <Center h="100vh">
              <Stack direction={"column"}>
                <Box>
                  <Heading>Bulls and Cows</Heading>
                  <NumButtons targetNum={randomNumber} />
                  <ResponseBox />
                </Box>
              </Stack>
            </Center>
          </Box>
          <Spacer />
          <Box
            w="360px"
            h="10"
            sx={{ paddingTop: "200px", paddingRight: "150px" }}
          >
              <Timer/>
          </Box>
        </Flex>
      </ResponsesProvider>
    </ChakraProvider>
  );
}

export default App;
