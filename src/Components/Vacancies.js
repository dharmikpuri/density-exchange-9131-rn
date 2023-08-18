import React, { useState } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, ChakraProvider, Heading, Button } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const Feature = ({ title, points }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      p={4}
      border="1px solid black"
      borderRadius="md"
      bg={hovered ? 'orange' : '#fefbec'}
      boxShadow="base"
      mb={4}
      transition="background-color 0.3s"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <div>
        <Text fontWeight={600} fontSize="lg" mb={2}>
          {title}
        </Text>
        <ul>
          {points.map((point, index) => (
            <li key={index} color="gray.700" fontSize="sm">
              {point}
            </li>
          ))}
        </ul>
      </div>
      {hovered && (
        <Button
          size="sm"
          colorScheme="white"
          bgColor="black"
          borderRadius="md"
          color="white"
          _hover={{ bgColor: 'red.600' }}
          alignSelf="flex-start"
          mt={2}
        >
          View Details
        </Button>
      )}
    </Box>
  );
};

export default function Vacancies() {
  return (
    <ChakraProvider>
      <Box p={4} w="70%" mx="auto">
        <Heading as="h1" textAlign="left" fontSize="2xl" color="gray.800" mb={4}>
          Open Vacancies
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            title={'Senior Full-Stack Engineer'}
            points={['Full Time Position', 'Open to Work', 'I am Open to Work']}
          />
          <Feature
            title={'Senior Full-Stack Engineer'}
            points={['Full Time Position', 'Open to Work', 'I am Open to Work']}
          />
          <Feature
            title={'Senior Full-Stack Engineer'}
            points={['Full Time Position', 'Open to Work', 'I am Open to Work']}
          />
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}
