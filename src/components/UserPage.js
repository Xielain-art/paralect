import React, {useContext, useState} from 'react'
import {
    Box, Flex, Grid, GridItem, Heading, HStack, Image, Link, SimpleGrid, Skeleton, Stack, Text, VStack
} from "@chakra-ui/react";
import followers from '../assets/images/followers.svg'
import following from '../assets/images/following.svg'
import empty from '../assets/images/empty.svg'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import 'react-pagination-bar/dist/index.css'
import {Pagination} from "react-pagination-bar";

const UserPage = observer(() => {
    const [currentPage, setCurrentPage] = useState(1)
    const {user} = useContext(Context)
    const isLoadingUser = user.loadingUser
    const isLoadingRepos = user.loadingRepos
    return (<Grid templateColumns='280px 1fr'
                  templateRows='1fr'
                  templateAreas='
                              "left right"
                              '
                  gap='96px'
    >
        <GridItem area='left'>
            <Flex direction='column'
                  gap='29px'>
                <Skeleton borderRadius='full'
                          isLoaded={!isLoadingUser}>
                    <Image src={user.user.avatar_url}
                           w='280px'
                           borderRadius='full'/>
                </Skeleton>
                <Flex direction='column'
                      gap='12px'>
                    <Skeleton isLoaded={!isLoadingUser}>
                        <Text fontSize='26px'
                              fontWeight='600'>
                            {user.user.name}
                        </Text>
                    </Skeleton>
                    <Skeleton isLoaded={!isLoadingUser}>
                        <Link isExternal='true'
                              color='main.100'

                              href={user.user.html_url}>
                            {user.user.login}
                        </Link>
                    </Skeleton>
                    <Flex align='center'
                          justify='space-between'>
                        <HStack spacing='12px'>
                            <Image src={followers}/>
                            <Skeleton isLoaded={!isLoadingUser}>
                                <Text fontSize='16px'>
                                    {user.user.followers} followers
                                </Text>
                            </Skeleton>
                        </HStack>
                        <HStack spacing='12px'>
                            <Image src={following}/>
                            <Skeleton isLoaded={!isLoadingUser}>
                                <Text fontSize='16px'>
                                    {user.user.following} following
                                </Text>
                            </Skeleton>
                        </HStack>
                    </Flex>
                </Flex>
            </Flex>
        </GridItem>

        <GridItem area='right'>
            {user.repos.length ?

                <Grid templateColumns='1fr'
                      templateRows='0.1fr 520px 0.1fr'
                      templateAreas='
                          "top"
                          "content"
                          "footer"
                            '
                      gap='20px'
                >
                    <GridItem area='top'>
                        <Heading>
                            Repositories ({user.user.public_repos})
                        </Heading>
                    </GridItem>
                    <GridItem area='content'>
                        <Grid gridAutoRows='112px 112px 112px 112px'
                              gap='24px'>
                            {user.repos
                                .slice((currentPage - 1) * 4, currentPage * 4)
                                .map((rep) => <GridItem key={rep.id}
                                                        bg='white'
                                ><Flex direction='column' gap='16px' p='24px 32px 24px 32px'>

                                    <Link color='main.100'
                                          fontSize='24px'
                                          href={rep.html_url} isExternal>
                                        {rep.name}
                                    </Link>
                                    <Text noOfLines={1} fontSize='16px' >
                                        {rep.description && rep.description}
                                    </Text>
                                </Flex>

                                </GridItem>)}
                        </Grid>
                    </GridItem>
                    <GridItem area='footer'>
                        <Flex justify='flex-end'><Pagination
                            initialPage={currentPage}
                            itemsPerPage={4}
                            onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
                            totalItems={user.repos.length}
                            pageNeighbours={2}
                        /></Flex>
                    </GridItem>
                </Grid>

                : <Flex justify='center'
                        align='center'
                        h='100%'>
                    <Image src={empty}/>
                </Flex>}

        </GridItem>

    </Grid>)
})

export default UserPage