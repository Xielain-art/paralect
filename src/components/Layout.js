import React from 'react'
import NavBar from "./NavBar";
import {Container} from "@chakra-ui/react";
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Container  maxW='1310px' minH='100%'>
                <Outlet/>
            </Container>
        </>
    )
}

export default Layout