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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useClipboard,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const { colorMode } = useColorMode();
  const [value, setValue] = React.useState("ZachStrikesBack#3732");
  const { hasCopied, onCopy } = useClipboard(value);
  return (
    <>
      <Container maxH="full" maxW="full" mt={0} overflow="hidden">
        <Background />

        <Flex justifyContent="center" alignItems="center">
          <Box
            width={{ base: "100%", sm: "75%", md: "70%", lg: "65%" }}
            bg="rgba(255,255,255,0.1)"
            boxShadow="inset 0 0 1000px rgba(255, 255, 255, .2)"
            dropShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
            backdropFilter="blur(5px)"
            color="white"
            borderRadius="lg"
            m={{ base: 2, sm: 10, md: 16, lg: 5 }}
            p={{ base: 2, sm: 5, md: 5, lg: 5 }}
          >
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
            <Box p={4} alignItems="flex-start">
              <DarkModeSwitchNA />
              <Wrap
                spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
                justifyContent={{ base: "center", sm: "center", md: "center" }}
                alignItems={{ base: "center", sm: "center", md: "center" }}
              >
                <WrapItem>
                  <Box>
                    <Heading alignItems="center" justifyContent="center">
                      Contact
                    </Heading>
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
              </Wrap>
              <HStack
                flexDirection="row"
                flexWrap="wrap"
                mt={{ base: 10, sm: 10, md: 15, lg: 20 }}
                spacing={{ base: 10, sm: 10, md: 15, lg: 20 }}
                px={5}
                alignItems="center"
              >
                <IconButton
                  onClick={onOpen}
                  aria-label="discord"
                  color="rgba(255,255,255,0.5)"
                  border="hidden"
                  borderColor="none"
                  isRound={true}
                  _hover={{ color: "#0D74FF" }}
                  icon={<BsDiscord size="60px" />}
                />

                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                  motionPreset="slideInBottom"
                  isCentered
                >
                  <ModalOverlay backdropFilter="blur(2px)" />
                  <ModalContent>
                    <ModalHeader>Discord Handle</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <Flex mb={2}>
                        <Input value={value} isReadOnly placeholder="Welcome" />
                        <Button onClick={onCopy} ml={2}>
                          {hasCopied ? "Copied" : "Copy"}
                        </Button>
                      </Flex>
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <ChakraLink
                  href="https://github.com/ZachCodedThat"
                  target="_blank"
                >
                  <IconButton
                    aria-label="GitHub"
                    color="rgba(255,255,255,0.5)"
                    border="hidden"
                    borderColor="none"
                    isRound={true}
                    _hover={{ color: "#0D74FF" }}
                    icon={<BsGithub size="60px" />}
                  />
                </ChakraLink>
                <ChakraLink
                  href="https://github.com/ZachCodedThat"
                  target="_blank"
                >
                  <IconButton
                    aria-label="GitHub"
                    color="rgba(255,255,255,0.5)"
                    border="hidden"
                    borderColor="none"
                    isRound={true}
                    _hover={{ color: "#0D74FF" }}
                    icon={<BsGithub size="60px" />}
                  />
                </ChakraLink>
                <ChakraLink
                  href="https://github.com/ZachCodedThat"
                  target="_blank"
                >
                  <IconButton
                    aria-label="GitHub"
                    color="rgba(255,255,255,0.5)"
                    border="hidden"
                    borderColor="none"
                    isRound={true}
                    _hover={{ color: "#0D74FF" }}
                    icon={<BsGithub size="60px" />}
                  />
                </ChakraLink>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
