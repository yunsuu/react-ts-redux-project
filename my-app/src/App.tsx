import React from 'react';
import { ChakraProvider,Button } from "@chakra-ui/react"
// import './App.css';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      s
      <Button colorScheme="blue">Button</Button>
    </ChakraProvider>
    </div>
  );
}

export default App;
