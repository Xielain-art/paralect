import React, {createContext, StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider, extendTheme} from "@chakra-ui/react"
import './index.css'
import {BrowserRouter} from "react-router-dom";
import UserStore from "./store/userStore";

const colors = {
    main: {
        100: '#0064EB'
    }
}
const theme = extendTheme({colors})
export const Context = createContext(null)

ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Context.Provider value={{
                user: new UserStore()
            }}
            >
                <ChakraProvider theme={theme}>
                    <App/>
                </ChakraProvider>
            </Context.Provider>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById('root')
);

