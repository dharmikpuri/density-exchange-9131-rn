import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Wondered = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: false,
      easing: "ease-out",
    });
  }, []);

  return (
    <Box  w={"90%"} m={"auto"} h={"600px"} mt={"100px"} bgColor={"#EDF8FE"} >
      <Box>
        <Center>
          <Text data-aos="fade-right" fontSize={"2xl"} mt={"50px"}>
            Let your friends, family, and co-workers (anonymously) rate your
            social skills
          </Text>
        </Center>
        <Center>
          <Heading data-aos="fade-left" fontSize={"5xl"}>
            Ever wondered what others think of you?
          </Heading>
        </Center>
      </Box>
      <Flex mt={"50px"} justifyContent={"space-evenly"}>
        <Flex flexDirection={"column"}>
          <img
            style={{ margin: "auto" }}
            width={"50px"}
            src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/256/Number-1-icon.png"
            alt="alt"
          />
          <Text>Answer question on your social skill</Text>
        </Flex>
        <Flex flexDirection={"column"}>
          <img
            style={{ margin: "auto" }}
            width={"50px"}
            src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/256/Number-2-icon.png"
            alt="alt"
          />
          <Text>Answer question on your social skill</Text>
        </Flex>
        <Flex flexDirection={"column"}>
          <img
            style={{ margin: "auto" }}
            width={"50px"}
            src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/256/Number-3-icon.png"
            alt="alt"
          />
          <Text>Answer question on your social skill</Text>
        </Flex>
      </Flex>

      <Flex flexDirection="column" alignItems="center" mt="50px">
        <Box
          data-aos="fade-up"
          boxShadow={
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
          }
          bg="white"
          p={90}
          w={"fit-content"}
          display="flex"
          paddingLeft={2}
        >
          <Box position="relative" mx={2}>
            <Button
              data-aos="zoom-in"
              colorScheme="red"
              position="absolute"
              left={"-45px"}
              top="-50px"
            >
              App
            </Button>
            <Box
              data-aos="zoom-out"
              bg="red.500"
              w={4}
              h={4}
              borderRadius="full"
            />
          </Box>

          <Box bg="gray.300" w="250px" h="2px" mt={2} />

          <Box position="relative" mx={2}>
            <Box
              data-aos="zoom-out"
              bg="green.500"
              w={4}
              h={4}
              borderRadius="full"
            />
            <Button
              data-aos="zoom-in"
              colorScheme="green"
              position="absolute"
              bottom="-50px"
            >
              Appoiment 1
            </Button>
          </Box>

          <Box bg="gray.300" w="250px" h="2px" mt={2} />

          <Box position="relative" mx={2}>
            <Button
              data-aos="zoom-in"
              colorScheme="blue"
              position="absolute"
              top="-50px"
            >
              Appoiment 2
            </Button>
            <Box
              data-aos="zoom-out"
              bg="blue.500"
              w={4}
              h={4}
              borderRadius="full"
            />
          </Box>

          <Box bg="gray.300" w="250px" h="2px" mt={2} />

          <Box position="relative" mx={2}>
            <Box
              data-aos="zoom-out"
              bg="purple.500"
              w={4}
              h={4}
              borderRadius="full"
            />
            <Button
              data-aos="zoom-in"
              colorScheme="purple"
              position="absolute"
              bottom="-50px"
            >
              Appoiment 1
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Wondered;