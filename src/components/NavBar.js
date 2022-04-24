import React, {useContext, useState} from 'react'
import {Box, Flex, Image, Input, InputGroup, InputLeftElement, useToast,} from "@chakra-ui/react";
import logo from '../assets/images/logo.svg'
import {SearchIcon} from "@chakra-ui/icons";
import {Context} from "../index";
import {gitApi} from "../api/gitApi";
import {useNavigate} from 'react-router-dom'

const Header = () => {
    const {user} = useContext(Context)
    const toast = useToast()
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState('')
    const onInput = e => setInputValue(e.target.value)
    const onFormSubmit = async (e) => {
        e.preventDefault()
        if (!inputValue.length) {
            toast({
                title: 'Error.',
                description: "Please enter a valid value",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top-right',
            })
        }
        if (inputValue.length) {
            user.setLoadingUser(true)
            user.setLoadingRepos(true)
            try {
                const data = await gitApi.getUser(inputValue)
                const repos = await gitApi.getRepos(inputValue)
                user.setUser(data)
                user.setRepos(repos)
                user.setError(null)
                navigate('user')
            } catch (e) {
                user.setError(e.message)
                navigate('/')
            } finally {
                user.setLoadingUser(false)
                user.setLoadingRepos(false)
                setInputValue('')
            }
        }
    }
    return (
        <Flex bg='main.100'
              maxW='100%'
              justify='center'
              mb='28px'>
            <Flex
                as='nav'
                wrap='wrap'
                w='1310px'
                minH='72px'
                align='center'
                gap='22px'
            >
                <Box>
                    <Image src={logo}
                           alt='logo'/>
                </Box>
                <Box>
                    <form onSubmit={onFormSubmit}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<SearchIcon color='gray.300'/>}
                            />
                            <Input w='500px'
                                   bg='white'
                                   value={inputValue}
                                   onChange={onInput}/>

                        </InputGroup>
                    </form>
                </Box>
            </Flex>
        </Flex>)
}

export default Header