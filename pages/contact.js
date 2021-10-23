import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import Link from "next/link";
import Background from "@styles/Background/AnimatedBG";

import {
  bgColor,
  textColor,
  buttonColor,
  buttonHoverColor,
  buttonTextHoverColor,
  accentColor,
} from "@styles/colorModeStyles";
import DarkModeSwitchNA from "@components/DarkModeSwitchNA";

export default function Contact() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Container maxH="full" maxW="full" mt={0} centerContent overflow="hidden">
        <Background />
        <Link href="/" passHref>
          <Button
            as="a"
            color={textColor[colorMode]}
            variant="nav"
            _hover={{
              bg: buttonHoverColor[colorMode],
              color: buttonTextHoverColor[colorMode],
            }}
          >
            Back
          </Button>
        </Link>
        <Flex>
          <Box
            bg="rgba(255,255,255,0.1)"
            boxShadow="inset 0 0 1000px rgba(255, 255, 255, .2)"
            dropShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
            backdropFilter="blur(5px)"
            color="white"
            borderRadius="lg"
            justifyContent={{ base: "center", sm: "center", md: "center" }}
            alignItems={{ base: "center", sm: "center", md: "center" }}
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <DarkModeSwitchNA />
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Hit ya boy up.
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}
                        >
                          1-609-254-2652
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="310px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{
                            border: "2px solid #1C6FEB",
                          }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}
                        >
                          Zachary.Przybilski@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={
                            <MdLocationOn color="#1970F1" size="20px" />
                          }
                        >
                          Philadelphia
                        </Button>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea></Textarea>
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>

      <HStack
        mt={{ base: 10, sm: 10, md: 15, lg: 20 }}
        spacing={{ base: 10, sm: 10, md: 15, lg: 20 }}
        px={5}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          aria-label="facebook"
          color="rgba(255,255,255,0.5)"
          backdropFilter="blur(5px)"
          size="60px"
          borderColor="rgba(255,255,255,0.5)"
          isRound={true}
          _hover={{ color: "#0D74FF" }}
          icon={<MdFacebook size="60px" />}
        />
        <IconButton
          aria-label="github"
          color="rgba(255,255,255,0.5)"
          backdropFilter="blur(5px)"
          size="60px"
          borderColor="rgba(255,255,255,0.5)"
          isRound={true}
          _hover={{ color: "#0D74FF" }}
          icon={<BsGithub size="60px" />}
        />
        <IconButton
          aria-label="discord"
          color="rgba(255,255,255,0.5)"
          backdropFilter="blur(5px)"
          border="hidden"
          borderColor="none"
          size="60px"
          isRound={true}
          _hover={{ color: "#0D74FF" }}
          icon={<BsDiscord size="60px" />}
        />
      </HStack>
    </>
  );
}
