import React, { useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Stack,
} from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

export default function Beforestart() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animations
    });
  }, []);

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Container maxW="4xl" centerContent>
      <Stack
        as={Box}
        textAlign="center"
        spacing={4} // Added spacing between points
        py={{ base: 10, md: 20 }}
        w="60%"
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div data-aos="fade">
          <Text fontSize="lg" color="black">
            We take privacy seriously
          </Text>
        </motion.div>
        <motion.div data-aos="fade">
          <Heading
            fontWeight={800}
            fontSize={{ base: 'md', sm: '2xl', md: '4xl' }}
            lineHeight={'110%'}
          >
            Before you get started
          </Heading>
        </motion.div>
        <motion.div data-aos="fade">
          <Text fontSize="lg" color="black" noOfLines={2} w="600px" mr="70px">
            "We won't share your answers with anyone (and won't ever tell you which friends said what about you)"
          </Text>
        </motion.div>
        <motion.div data-aos="fade">
          {/* <Text fontSize="lg" color="black">
            
          </Text> */}
          <div style={{ display: 'inline-block', transform: 'rotate(-5deg)',fontSize:"lg" ,color:"black" }}>
            with love,{' '}
              <span style={{ fontFamily: 'cursive' }}>keen aros</span>
            </div>




        </motion.div>
        <motion.div data-aos="fade">
          <Box display="flex" justifyContent="center">
            <Button
              color="white"
              bg="black"
              rounded="full"
              w="100px"
              px={4}
              _hover={{
                bg: 'gray.900',
              }}
              pl={4}
              pr={4}
            >
              Start a Test
            </Button>
          </Box>
        </motion.div>
        <motion.div data-aos="fade">
          <Text fontSize="lg" color="black">
            Take only 5 minutes
          </Text>
        </motion.div>
      </Stack>
    </Container>
  );
}
