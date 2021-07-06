import React from 'react';
import {
  ChakraProvider,
  VStack,
  StackDivider,
  Button,
  Stack,
  Heading,
  Text,
  Box,
} from '@chakra-ui/react';
// import './App.css';

// 영상 카드 만들기
// nav 만들기
// 레시피 만들기

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl"> 앙 </Heading>
            <Text mt={4}>잉이이이이잉</Text>
          </Box>
        </VStack>
      </ChakraProvider>
    </div>
  );
}

export default App;
