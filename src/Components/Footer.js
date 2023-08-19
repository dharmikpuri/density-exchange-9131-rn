import React from 'react';
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    VisuallyHidden,
    chakra,
    useColorModeValue,
    Flex,
    Center,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (

        <Box
            bg={'white'}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Box borderTopWidth={2}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>

            </Box>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={1} spacing={8}>
                    <Stack align={'center'} justify={'center'}>
                        <img
                            src="https://image.pitchbook.com/zvmweLruf7H3H5ofy1ppunth1Wx1634111865055_200x200"
                            alt="Centered Image"
                            style={{ width: '80px', height: '80px' }}
                        />
                        <Text mt={4} color="purple.500" fontWeight="bold">
                            Ahead
                        </Text>
                    </Stack>

                    <Stack align={'center'}>
                        <Flex gap={6}>
                            <Stack direction="row" align="center" spacing={2}>
                                <Box bg="#9af0d7" rounded="full" p={2}>
                                    <FaMapMarkerAlt color="black" />
                                </Box>
                                <Text>Auguststraße 26, 10117 Berlin</Text>
                            </Stack>
                            <Stack direction="row" align="center" spacing={2}>
                                <Box bg="#9af0d7" rounded="full" p={2}>
                                    <FaEnvelope color="black" />
                                </Box>
                                <Text>hi@ahead-app.com</Text>
                            </Stack>
                        </Flex>
                    </Stack>

                    <Stack align={'center'}>
                        <img
                            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmMsqhDM_WkLOvrWRWk0ZkA2fhbFW1HFwRVaoYUZFxchYhn_s9"
                            alt="App Store Badge"
                            style={{ width: '120px', height: '60px' }}
                        />
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box
                borderTopWidth={2}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
                <Center
                    py={4}
                >
                    <Text >© 2023 Ahead Apps. All rights reserved</Text>
                </Center>
            </Box>
        </Box>
    );
}
