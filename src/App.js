import React from 'react';
import Header from "./components/NavBar";
import {Container} from "@chakra-ui/react";
import IndexPage from "./components/IndexPage";
import {Route, Routes} from 'react-router-dom'
import Layout from "./components/Layout";
import UserPage from "./components/UserPage";

function App() {
    return (
        <Routes>
            <Route path='/'
                   element={<Layout/>}>
                <Route path='/'
                       element={<IndexPage/>}/>
                <Route path='/user'
                       element={<UserPage/>}/>
            </Route>
        </Routes>

    );
}

export default App;
