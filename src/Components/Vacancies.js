import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  ChakraProvider,
  Heading,
  Button,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const Feature = ({ title, points }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="feature-box"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        p={4}
        border="1px solid black"
        borderRadius="md"
        bg={hovered ? 'orange' : '#fefbec'}
        boxShadow="base"
        mb={4}
        transition="background-color 0.3s"
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
              <li
                key={index}
                color="gray.700"
                fontSize="sm"
                display="flex"
                alignItems="center"
              >
                <Box as="span" fontSize="xl" mr={2}>
                  •
                </Box>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.9 }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </motion.div>
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
            points={[
              'Full-time position',
              'Berlin or remote',
              '€65-85k, 0.5-1.50% equity share options',
            ]}
          />
          <Feature
            title={'Senior Full-Stack Engineer'}
            points={[
              'Full-time position',
              'Berlin or remote',
              '€65-85k, 0.5-1.50% equity share options',
            ]}
          />
          <Feature
            title={'Senior Full-Stack Engineer'}
            points={[
              'Full-time position',
              'Berlin or remote',
              '€65-85k, 0.5-1.50% equity share options',
            ]}
          />
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}
