import {
  SimpleGrid,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
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
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import Link from "next/link";

import {
  textColor,
  iconColor,
  buttonHoverColor,
  buttonTextHoverColor,
} from "@styles/colorModeStyles";
import DarkModeSwitchNA from "@components/Navbar/DarkModeSwitchNA";
import useWindowDimensions from "@utils/Hooks/useWindowDimension";

import { NextSeo } from "next-seo";

import Navbar from "@components/Navbar";

export default function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [discordValue] = React.useState("ZachStrikesBack#3732");
  const { hasCopied, onCopy } = useClipboard(discordValue);
  const { colorMode } = useColorMode();
  const { width } = useWindowDimensions();

  return (
    <>
      <NextSeo
        title="Zachs - Contact"
        description="This page contains all of my contact information."
        openGraph={{
          url: "https://www.zacharyp.dev/contact",
        }}
      />
      <Center py={{ base: 3, md: 10 }}>
        <Stack direction={"column"} m={5}>
          {width > 1000 ? (
            <Flex flexDir={"row-reverse"}>
              <Navbar />
            </Flex>
          ) : (
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
          )}
          {width < 800 ? (
            <Box
              h={"100px"}
              w={"full"}
              bgGradient="linear(to-tl, rgba(117,2,136,1) 0%, rgba(9,9,121,1) 55%, rgba(132,0,255,1) 100%)"
              rounded={"md"}
            />
          ) : (
            <Box
              h={"100px"}
              w={"full"}
              backgroundImage="/AbstractBG.avif"
              backgroundAttachment="fixed"
              backgroundSize="cover"
              backgroundPosition="center"
              rounded={"md"}
            />
          )}
          <Box
            maxW={"1200px"}
            w={"full"}
            bg={"rgba(30, 49, 60, 1)"}
            boxShadow={"2xl"}
            rounded={"md"}
          >
            <Flex mt={-12} pl={2}>
              <Flex>
                <Stack spacing={0} m={4} mt={14} alignItems={"center"}>
                  <Heading
                    fontSize={["5xl", "6xl"]}
                    fontWeight={700}
                    fontFamily={"body"}
                    color="#FFECD1"
                    mb={4}
                  >
                    Contact me
                  </Heading>
                  <Flex>
                    <SimpleGrid
                      columns={{ base: "3", sm: "6", md: "6" }}
                      spacing={{ base: 10, sm: 10, md: 20 }}
                      m={4}
                    >
                      <IconButton
                        onClick={onOpen}
                        aria-label="discord"
                        color="rgba(255,255,255,0.5)"
                        border="hidden"
                        borderColor="none"
                        isRound={true}
                        _hover={{ color: iconColor[colorMode] }}
                        _active={{ color: "none" }}
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
                          _active={{ color: "none" }}
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
                          _active={{ color: "none" }}
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
                          _active={{ color: "none" }}
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
                          _active={{ color: "none" }}
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
                          _active={{ color: "none" }}
                          icon={<BsCalendar3 size="60px" />}
                        />
                      </ChakraLink>
                    </SimpleGrid>
                  </Flex>
                </Stack>
              </Flex>
            </Flex>
          </Box>
          {width < 800 ? (
            <Box
              h={"120px"}
              w={"full"}
              bgGradient="linear(to-tl, rgba(117,2,136,1) 0%, rgba(9,9,121,1) 55%, rgba(132,0,255,1) 100%)"
              rounded={"md"}
            />
          ) : (
            <Box
              h={"120px"}
              w={"full"}
              backgroundImage="/AbstractBG.avif"
              backgroundAttachment="fixed"
              backgroundSize="cover"
              backgroundPosition="center"
              rounded={"md"}
            />
          )}
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
              m={5}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Popover placement="right">
                <PopoverTrigger>
                  <IconButton
                    aria-label="phone number"
                    color="rgba(255,255,255,0.5)"
                    border="hidden"
                    borderColor="none"
                    _hover={{ color: iconColor[colorMode] }}
                    _active={{ color: "none" }}
                    icon={<MdOutlineEmail size="60px" />}
                  />
                </PopoverTrigger>
                <PopoverContent color={textColor[colorMode]} w="max-content">
                  <PopoverHeader fontWeight="semibold">Email:</PopoverHeader>
                  <PopoverArrow />

                  <PopoverBody>Zachary.Przybilski@Gmail.com</PopoverBody>
                </PopoverContent>
              </Popover>

              <Popover placement="left">
                <PopoverTrigger>
                  <IconButton
                    aria-label="Phone Number"
                    color="rgba(255,255,255,0.5)"
                    border="hidden"
                    borderColor="none"
                    _hover={{ color: iconColor[colorMode] }}
                    _active={{ color: "none" }}
                    icon={<MdLocalPhone size="60px" />}
                  />
                </PopoverTrigger>
                <PopoverContent color={textColor[colorMode]} w="max-content">
                  <PopoverHeader fontWeight="semibold">Phone#:</PopoverHeader>
                  <PopoverArrow />

                  <PopoverBody>6092542652</PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </Box>
          {width < 800 ? (
            <Box
              h={"25px"}
              w={"full"}
              bgGradient="linear(to-tl, rgba(117,2,136,1) 0%, rgba(9,9,121,1) 55%, rgba(132,0,255,1) 100%)"
              rounded={"md"}
            />
          ) : (
            <Box
              h={"25px"}
              w={"full"}
              backgroundImage="/AbstractBG.avif"
              backgroundAttachment="fixed"
              backgroundSize="cover"
              backgroundPosition="center"
              rounded={"md"}
            />
          )}
        </Stack>
      </Center>
    </>
  );
}
