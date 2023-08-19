"use client"
import React, { useEffect } from 'react';
import { Box, Card, Flex, Heading, Image, Text, SimpleGrid } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../app/globals.css"
function WorkWith() {
    useEffect(() => {
        AOS.init({
            duration: 800, // Duration of animations
            // Animation will occur only once
        });
    }, []);
    return (
        <Box w="90%" m="auto" mt="100px" bg="#f3f1ff" boxShadow="lg" borderRadius="xl" padding={"20px"}>
            <Flex gap="30px" p="20px">
                <Flex flexDirection="column" gap="30px">
                    <Heading data-aos="fade-right">Work With Us</Heading>
                    <Card color="black" p="20px" boxShadow="md" borderRadius="xl" w={"80%"} data-aos="fade-up">
                        <Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhNucmljN2P1S-2vNJBOWMFWafY9Qxq6wAWtJKir0jvjmV3UTf" alt="Image" w="100px" h="100px" ml={"-10px"} />
                        <Text fontWeight="bold" fontSize="xl">ABOUT</Text>
                        <Text color={"#6c6b70"}>
                            At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!
                        </Text>
                    </Card>
                    <Card bg="#fef7f1" color="black" p="20px" boxShadow="md" borderRadius="xl" w={"80%"} data-aos="fade-up">
                        <Text fontWeight="bold" fontSize="xl">PRODUCTS</Text>
                        <Text color={"#6c6b70"}>
                            Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...
                        </Text>
                    </Card>
                </Flex>

                <Flex flexDirection="column" gap="10px">
                    <Heading color="#6341ef" textAlign={"end"} mr={"40px"} data-aos="fade-left">Ahead</Heading>
                    <SimpleGrid height="400px" bg="white" p="10px" borderRadius="md" boxShadow="md" color="blue.500" scrollbarColor="blue.500" scrollbarWidth="thin" overflowY={"scroll"} gap={"25px"} className='scrolling'>
                        <Card p="20px" boxShadow="md" borderRadius="md" bg="white">
                            <Text fontWeight="bold">
                                Power through, even when the going gets tough
                            </Text>
                            <Text color={"#6c6b70"}>
                                We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
                            </Text>
                        </Card>

                        <Card p="20px" boxShadow="md" borderRadius="md" bg="white">
                            <Text fontWeight="bold">
                                Learn more about who you are and where you want to go
                            </Text>
                            <Text color={"#6c6b70"}>
                                We ask the right questions to help you better understand why you do things the way you do.
                            </Text>
                        </Card>

                        <Card p="20px" boxShadow="md" borderRadius="md" bg="white">
                            <Text fontWeight="bold">
                                Play and grow together with others on the same journey
                            </Text>
                            <Text color={"#6c6b70"}>
                                Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals
                            </Text>
                        </Card>


                        <Card p="20px" boxShadow="md" borderRadius="md" bg="white">
                            <Text fontWeight="bold">
                                Power through, even when the going gets tough
                            </Text>
                            <Text color={"#6c6b70"}>
                                We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
                            </Text>
                        </Card>

                        <Card p="20px" boxShadow="md" borderRadius="md" bg="white">
                            <Text fontWeight="bold">
                                Learn more about who you are and where you want to go
                            </Text>
                            <Text color={"#6c6b70"}>
                                We ask the right questions to help you better understand why you do things the way you do.
                            </Text>
                        </Card>

                        <Card p="20px" boxShadow="md" borderRadius="md" bg="white">
                            <Text fontWeight="bold">
                                Play and grow together with others on the same journey
                            </Text>
                            <Text color={"#6c6b70"}>
                                Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals
                            </Text>
                        </Card>





                    </SimpleGrid>
                </Flex>
            </Flex>
        </Box>
    );
}

export default WorkWith;









