import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider, extendTheme, theme} from "@chakra-ui/react"


ReactDOM.render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <App/>
        </ChakraProvider>
    </StrictMode>,
    document.getElementById('root')
);

