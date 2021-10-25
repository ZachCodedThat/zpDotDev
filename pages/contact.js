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
  Grid,
  Input,
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
import { SiSteam } from "react-icons/si";
import React from "react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import {
  BsGithub,
  BsDiscord,
  BsPerson,
  BsLinkedin,
  BsTwitter,
  BsTwitch,
  BsCalendar3,
} from "react-icons/bs";
import Link from "next/link";
import Background from "@styles/Background/AnimatedBG";

import {
  bgColor,
  textColor,
  iconColor,
  buttonColor,
  buttonHoverColor,
  buttonTextHoverColor,
  accentColor,
  glassCardBGColor,
} from "@styles/colorModeStyles";
import DarkModeSwitchNA from "@components/DarkModeSwitchNA";
import BackgroundReverse from "@styles/Background/AnimatedBGReverse";

export default function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode } = useColorMode();
  const [discordValue, setValue] = React.useState("ZachStrikesBack#3732");
  const { hasCopied, onCopy } = useClipboard(discordValue);
  const [steamValue, setSteamValue] = React.useState("292809946");
  const { hasCopiedSteam, onCopySteam } = useClipboard(steamValue);
  return (
    <>
      <BackgroundReverse />
      <Background />

      <Flex justifyContent="center" alignItems="center" boxSizing="border-box">
        <Box
          width="100%"
          maxW={{
            base: "fit-content",
            sm: "fit-content",
            md: "fit-content",
            lg: "fit-content",
          }}
          maxH={{
            base: "full",
            sm: "fit-content",
            md: "fit-content",
            lg: "fit-content",
          }}
          bg={glassCardBGColor[colorMode]}
          boxShadow={
            colorMode === "light"
              ? "inset 0 0 300px rgba(46, 49, 49, .3)"
              : "inset 0 0 300px rgba(255, 255, 255, .1) "
          }
          backdropFilter="blur(5px)"
          color="white"
          borderRadius="lg"
          m={{ base: 4, sm: 8, md: 16, lg: 5 }}
          p={{ base: 4, sm: 5, md: 6, lg: 7 }}
        >
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
          <Box alignItems="center" justifyContent="center">
            <Wrap
              spacing={{ base: 10, sm: 3, md: 5, lg: 20 }}
              justifyContent={{ base: "center", sm: "center", md: "center" }}
              alignItems={{ base: "center", sm: "center", md: "center" }}
            >
              <WrapItem>
                <Box>
                  <Heading color={textColor[colorMode]} textAlign="center">
                    Contact Me
                  </Heading>

                  <Box p={{ base: 0, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="center">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        cursor="auto"
                        _active="none"
                        color={textColor[colorMode]}
                        _hover="none"
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        1-609-254-2652
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="310px"
                        variant="ghost"
                        cursor="auto"
                        _active="none"
                        color={textColor[colorMode]}
                        _hover="none"
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        Zachary.Przybilski@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        cursor="auto"
                        _active="none"
                        color={textColor[colorMode]}
                        _hover="none"
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Philadelphia
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>

            <Grid
              marginTop={5}
              templateColumns="repeat(3, 1fr)"
              templateRows="repeat(3 fr)"
              rowGap={{ base: 6, sm: 6, md: 8, lg: 10 }}
              columnGap={{ base: 10, sm: 10, md: 15, lg: 20 }}
              // maxWidth="fit-content"
              justifyContent={{ base: "center", sm: "center", md: "center" }}
              width="100%"
            >
              {/* <HStack
                  flexDirection="row"
                  flexWrap="wrap"
                  mt={{ base: 10, sm: 10, md: 15, lg: 20 }}
                  spacing={{ base: 7, sm: 10, md: 15, lg: 20 }}
                  px={5}
                  alignItems="center"
                > */}
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
            </Grid>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
