import React from 'react';
import { Text, Button } from '@chakra-ui/react'
import MainRoutes from './routes';
import GlobalStyles from './options/GlobalStyles';

function App() {
  return(
    <>
      <MainRoutes />
      <GlobalStyles />
    </>
  );
};

export default App;