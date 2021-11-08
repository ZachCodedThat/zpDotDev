import {
  SimpleGrid,
  Text,
  Flex,
  Center,
  Stack,
  Box,
  Heading,
  IconButton,
  Button,
  Input,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useClipboard,
  Link as ChakraLink,
} from "@chakra-ui/react";

import React from "react";
import {
  BsGithub,
  BsDiscord,
  BsLinkedin,
  BsTwitter,
  BsTwitch,
  BsCalendar3,
} from "react-icons/bs";
import Link from "next/link";

import {
  textColor,
  iconColor,
  buttonHoverColor,
  buttonTextHoverColor,
} from "@styles/colorModeStyles";
import DarkModeSwitchNA from "@components/DarkModeSwitchNA";
import useWindowDimensions from "@utils/Hooks/useWindowDimension";

export default function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [discordValue, setValue] = React.useState("ZachStrikesBack#3732");
  const { hasCopied, onCopy } = useClipboard(discordValue);
  const { colorMode } = useColorMode();

  return (
    <>
      <Center py={6}>
        <Stack direction={"column"} m={5}>
          <Flex justifyContent="space-between">
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
            <DarkModeSwitchNA />
          </Flex>
          <Box
            h={"180px"}
            w={"full"}
            backgroundImage="/AbstractBG.jpg"
            backgroundAttachment="fixed"
            backgroundSize="cover"
            backgroundPosition="center"
            rounded={"md"}
          />
          <Box
            maxW={"1200px"}
            w={"full"}
            bg={"rgba(30, 49, 60, 1)"}
            boxShadow={"2xl"}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={-12} pl={2}>
              <Flex>
                <Stack spacing={0} m={4} mt={14}>
                  <Heading
                    fontSize={"6xl"}
                    fontWeight={700}
                    fontFamily={"body"}
                    color="#FFECD1"
                  >
                    Contact me
                  </Heading>
                </Stack>
              </Flex>
            </Flex>

            <Stack
              direction={{ base: "column", sm: "column", md: "row" }}
              justify={{ base: "center", sm: "center", md: "center" }}
              spacing={6}
              p={6}
            >
              <Stack
                spacing={0}
                w={"fit-content"}
                align={"flex-start"}
                border={"1px solid"}
                borderColor="#FFECD1"
                borderRadius="md"
                p={2}
              >
                <Text fontWeight={600} color="#FFECD1">
                  MD:
                </Text>
                <Text fontSize={"md"} color="#FFECD1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Vulputate ut pharetra sit amet aliquam id. Augue eget arcu
                  dictum varius duis at consectetur. Interdum velit laoreet id
                  donec ultrices tincidunt arcu non. In eu mi bibendum neque
                  egestas congue quisque egestas diam. Odio aenean sed
                  adipiscing diam donec adipiscing tristique risus nec. Lobortis
                  mattis aliquam faucibus purus in. Euismod nisi porta lorem
                  mollis. Tincidunt tortor aliquam nulla facilisi cras
                  fermentum. At in tellus integer feugiat scelerisque varius.
                </Text>
              </Stack>
              <Stack
                w={"fit-content"}
                wrap={{ base: "wrap", sm: "wrap", md: "nowrap" }}
                spacing={0}
                alignItems="center"
                border={"1px solid"}
                borderColor="#FFECD1"
                borderRadius="md"
                p={2}
              >
                <Text fontWeight={600} color="#FFECD1">
                  LG:
                </Text>
                <Text fontSize={"lg"} color="#FFECD1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Vulputate ut pharetra sit amet aliquam id. Augue eget arcu
                  dictum varius duis at consectetur. Interdum velit laoreet id
                  donec ultrices tincidunt arcu non. In eu mi bibendum neque
                  egestas congue quisque egestas diam. Odio aenean sed
                  adipiscing diam donec adipiscing tristique risus nec. Lobortis
                  mattis aliquam faucibus purus in. Euismod nisi porta lorem
                  mollis. Tincidunt tortor aliquam nulla facilisi cras
                  fermentum. At in tellus integer feugiat scelerisque varius.
                </Text>
              </Stack>
            </Stack>
            <Center>
              <Stack
                w={"fit-content"}
                wrap={{ base: "wrap", sm: "wrap", md: "nowrap" }}
                spacing={0}
                alignItems="center"
                border={"1px solid"}
                borderColor="#FFECD1"
                borderRadius="md"
                m={6}
                p={2}
              >
                <Text fontWeight={600} color="#FFECD1">
                  XL:
                </Text>
                <Text fontSize={"xl"} color="#FFECD1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Vulputate ut pharetra sit amet aliquam id. Augue eget arcu
                  dictum varius duis at consectetur. Interdum velit laoreet id
                  donec ultrices tincidunt arcu non. In eu mi bibendum neque
                  egestas congue quisque egestas diam. Odio aenean sed
                  adipiscing diam donec adipiscing tristique risus nec. Lobortis
                  mattis aliquam faucibus purus in. Euismod nisi porta lorem
                  mollis. Tincidunt tortor aliquam nulla facilisi cras
                  fermentum. At in tellus integer feugiat scelerisque varius.
                </Text>
              </Stack>
            </Center>
          </Box>
          <Box
            h={"200px"}
            w={"full"}
            backgroundImage="/AbstractBG.jpg"
            backgroundAttachment="fixed"
            backgroundSize="cover"
            backgroundPosition="center"
            rounded={"md"}
          />
          <Box
            maxW={"1200px"}
            w={"full"}
            bg={"rgba(30, 49, 60, 1)"}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
            mb={5}
          >
            <Flex
              justify={{ base: "center", sm: "center", md: "center" }}
              mt={-12}
              pl={2}
            >
              <Flex>
                <Stack spacing={0} m={2} mt={12}>
                  <Heading
                    fontSize={"6xl"}
                    fontWeight={700}
                    fontFamily={"body"}
                    color="#FFECD1"
                  >
                    Links
                  </Heading>
                </Stack>
              </Flex>
            </Flex>
            <Flex justify={"center"}>
              <SimpleGrid
                columns={{ base: "3", sm: "6", md: "6" }}
                spacing={{ base: 10, sm: 10, md: 20 }}
                p={8}
              >
                <IconButton
                  onClick={onOpen}
                  aria-label="discord"
                  color="rgba(255,255,255,0.5)"
                  border="hidden"
                  borderColor="none"
                  isRound={true}
                  _hover={{ color: iconColor[colorMode] }}
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
                        <Input
                          value={discordValue}
                          isReadOnly
                          placeholder="Welcome"
                        />
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
                    _hover={{ color: iconColor[colorMode] }}
                    icon={<BsGithub size="60px" />}
                  />
                </ChakraLink>
                <ChakraLink
                  href="https://www.linkedin.com/in/zachary-przybilski-475186208/"
                  target="_blank"
                >
                  <IconButton
                    aria-label="linkedIn"
                    color="rgba(255,255,255,0.5)"
                    border="hidden"
                    borderColor="none"
                    isRound={true}
                    _hover={{ color: iconColor[colorMode] }}
                    icon={<BsLinkedin size="60px" />}
                  />
                </ChakraLink>
                <ChakraLink
                  href="https://twitter.com/TweetZachBack"
                  target="_blank"
                >
                  <IconButton
                    aria-label="Twitter"
                    color="rgba(255,255,255,0.5)"
                    border="hidden"
                    borderColor="none"
                    isRound={true}
                    _hover={{ color: iconColor[colorMode] }}
                    icon={<BsTwitter size="60px" />}
                  />
                </ChakraLink>
                <ChakraLink
                  href="https://www.twitch.tv/zach_strikes_back"
                  target="_blank"
                >
                  <IconButton
                    aria-label="Twitch"
                    color="rgba(255,255,255,0.5)"
                    border="hidden"
                    borderColor="none"
                    isRound={true}
                    _hover={{ color: iconColor[colorMode] }}
                    icon={<BsTwitch size="60px" />}
                  />
                </ChakraLink>
                <ChakraLink
                  href="https://calendly.com/zachary-przybilski"
                  target="_blank"
                >
                  <IconButton
                    aria-label="Twitch"
                    color="rgba(255,255,255,0.5)"
                    border="hidden"
                    borderColor="none"
                    isRound={true}
                    _hover={{ color: iconColor[colorMode] }}
                    icon={<BsCalendar3 size="60px" />}
                  />
                </ChakraLink>
              </SimpleGrid>
            </Flex>
          </Box>
          <Box
            h={"50px"}
            w={"full"}
            backgroundImage="/AbstractBG.jpg"
            backgroundAttachment="fixed"
            backgroundSize="cover"
            backgroundPosition="center"
            rounded={"md"}
          />
        </Stack>
      </Center>
    </>
  );
}

// TODO: refactor this mess and break out everything I can into a separate file.
