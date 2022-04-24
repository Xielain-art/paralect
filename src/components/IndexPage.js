import React, {useContext} from 'react'
import {Box, Flex, Image, Spinner, Text} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import error from '../assets/images/error.svg'
import start from '../assets/images/start.svg'

const IndexPage = observer(() => {
    const {user} = useContext(Context)
    let content = <Image src={start}/>
    if (user.error) {
        content = <Image src={error}/>
    }
    return (
        <Flex minH='100vh'
              align='center'
              justify='center'>
            {!user.loadingUser ? content
                : <Spinner size='xl'/>
            }
        </Flex>
    )
})

export default IndexPage