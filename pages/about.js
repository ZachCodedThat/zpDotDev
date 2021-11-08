import React from "react";
import {
  useColorMode,
  useColorModeValue,
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  IconButton,
  Link,
} from "@chakra-ui/react";
import {
  textColor,
  buttonHoverColor,
  buttonTextHoverColor,
  glassCardBGColor,
} from "@styles/colorModeStyles";
import DarkModeSwitchNA from "@components/DarkModeSwitchNA";
import { DownloadIcon } from "@chakra-ui/icons";
import useWindowDimensions from "@utils/Hooks/useWindowDimension";

const About = () => {
  const { colorMode } = useColorMode();
  const { width } = useWindowDimensions();
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
            bg={glassCardBGColor[colorMode]}
            boxShadow={"2xl"}
            rounded={"md"}
          >
            <Flex
              justify={{ base: "center", sm: "center", md: "space-between" }}
              mt={-12}
              pl={2}
            >
              <Flex>
                <Avatar
                  size={"2xl"}
                  src={"/headshot.JPG"}
                  alt={"Zach"}
                  ml={{ base: "0", sm: "2", md: "2" }}
                  css={{
                    border: "none",
                  }}
                />
                <Stack spacing={0} m={4} mt={14}>
                  <Heading
                    fontSize={"2xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                    align={{ base: "center", sm: "center", md: "flex-start" }}
                    backgroundImage="/AbstractBG.jpg"
                    backgroundAttachment="fixed"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundClip="text"
                  >
                    Zach Przybilski
                  </Heading>
                  <Text color={textColor[colorMode]}>Frontend Developer</Text>
                  {width < 800 ? (
                    <Flex alignItems="center">
                      <Text
                        fontWeight={200}
                        fontSize={"xs"}
                        color={textColor[colorMode]}
                      >
                        Resume
                      </Text>
                      <Link href="/zachsResume2021.pdf" target="_blank">
                        <IconButton
                          m={0}
                          variant="ghost"
                          color={textColor[colorMode]}
                          icon={<DownloadIcon />}
                          _hover={{
                            bg: "none",
                          }}
                          _active={{
                            bg: "none",
                          }}
                        >
                          Back
                        </IconButton>
                      </Link>
                    </Flex>
                  ) : null}
                </Stack>
              </Flex>
              {width > 800 ? (
                <Flex alignItems="center">
                  <Text
                    fontWeight={200}
                    fontSize={"xs"}
                    color={textColor[colorMode]}
                  >
                    Resume
                  </Text>
                  <Link href="/zachsResume2021.pdf" target="_blank">
                    <IconButton
                      m={0}
                      variant="ghost"
                      color={textColor[colorMode]}
                      icon={<DownloadIcon />}
                      _hover={{
                        bg: "none",
                      }}
                      _active={{
                        bg: "none",
                      }}
                    >
                      Back
                    </IconButton>
                  </Link>
                </Flex>
              ) : null}
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
                borderColor={textColor[colorMode]}
                borderRadius="md"
                p={2}
              >
                <Text fontWeight={600}>About:</Text>
                <Text fontSize={"sm"} color={textColor[colorMode]}>
                  I am a Frontend Developer with a passion for creating
                  beautiful, intuitive, and responsive user experiences. I have
                  a background in business management and a love for learning
                  new technologies.
                </Text>
              </Stack>
              <Stack
                w={"fit-content"}
                wrap={{ base: "wrap", sm: "wrap", md: "nowrap" }}
                spacing={0}
                alignItems="center"
                border={"1px solid"}
                borderColor={textColor[colorMode]}
                borderRadius="md"
                p={2}
              >
                <Text fontWeight={600}>About:</Text>
                <Text fontSize={"sm"} color={textColor[colorMode]}>
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
                borderColor={textColor[colorMode]}
                borderRadius="md"
                m={6}
                p={2}
              >
                <Text fontWeight={600}>About2:</Text>
                <Text fontSize={"md"} color={textColor[colorMode]}>
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
            bg={glassCardBGColor[colorMode]}
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
                    fontSize={"3xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                  >
                    Skills
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
                w={"fit-content"}
                wrap={{ base: "wrap", sm: "wrap", md: "nowrap" }}
                spacing={0}
                alignItems="center"
                border={"1px solid"}
                borderColor={textColor[colorMode]}
                borderRadius="md"
                p={2}
              >
                <Text fontWeight={600}>Test:</Text>
                <Text fontSize={"md"} color={textColor[colorMode]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.{" "}
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Box
            h={"25px"}
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
};

export default About;

//TODO Breakout this monster into smaller components
//TODO figure out how to make resume button move without having to use a hook..Possibly some grid magic??
