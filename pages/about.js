/* eslint-disable react/no-unescaped-entities */
import {
  useColorMode,
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Button,
  IconButton,
  Image,
} from "@chakra-ui/react";
import {
  textColor,
  buttonHoverColor,
  buttonTextHoverColor,
} from "@styles/colorModeStyles";
import Link from "next/link";
import DarkModeSwitchNA from "@components/Navbar/DarkModeSwitchNA";
import { DownloadIcon } from "@chakra-ui/icons";
import useWindowDimensions from "@utils/Hooks/useWindowDimension";
import SkillsBar from "@components/SkillsBar";
import { NextSeo } from "next-seo";
import Navbar from "@components/Navbar";

const About = () => {
  const { colorMode } = useColorMode();
  const { width } = useWindowDimensions();
  return (
    <>
      <NextSeo
        title="Zachs - About"
        description="This page contains personal information about myself and my skill set along with a link to my resume."
        openGraph={{
          url: "https://www.zacharyp.dev/about",
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
                  aria-label="Go back to home page"
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
              h={"150px"}
              w={"full"}
              bgGradient="linear(to-tl, rgba(117,2,136,1) 0%, rgba(9,9,121,1) 55%, rgba(132,0,255,1) 100%)"
              rounded={"md"}
            />
          ) : (
            <Box
              h={"150px"}
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
            <Flex
              justify={{ base: "center", sm: "center", md: "space-between" }}
              mt={-12}
              pl={2}
            >
              <Flex>
                <Avatar
                  size={"2xl"}
                  src={"/headshot.webp"}
                  alt={"Zachs Headshot"}
                  name={"Zachs Headshot"}
                  ml={{ base: "0", sm: "2", md: "2" }}
                  css={{
                    border: "none",
                  }}
                />
                <Stack spacing={0} m={4} mt={14}>
                  {width < 800 ? (
                    <Flex alignItems="center">
                      <Text fontWeight={200} fontSize={"xs"} color="#FFECD1">
                        Resume
                      </Text>
                      <Link
                        href="/UpdatedResumeJan_2022.pdf"
                        target="_blank"
                        alt="Download Resume"
                      >
                        <IconButton
                          aria-label="Download Resume"
                          name="Download Resume"
                          m={0}
                          variant="ghost"
                          color="#FFECD1"
                          icon={<DownloadIcon />}
                          _hover={{
                            bg: "none",
                          }}
                          _active={{
                            bg: "none",
                          }}
                        ></IconButton>
                      </Link>
                    </Flex>
                  ) : null}
                </Stack>
              </Flex>
              {width > 800 ? (
                <Flex alignItems="center">
                  <Text fontWeight={200} fontSize={"xs"} color="#FFECD1">
                    Resume
                  </Text>
                  <Link href="/ZPRes.pdf" target="_blank">
                    <IconButton
                      m={0}
                      variant="ghost"
                      color="#FFECD1"
                      icon={<DownloadIcon />}
                      _hover={{
                        bg: "none",
                      }}
                      _active={{
                        bg: "none",
                      }}
                    ></IconButton>
                  </Link>
                </Flex>
              ) : null}
            </Flex>

            <Stack
              direction={{ base: "column", sm: "column", md: "row" }}
              justify={{ base: "center", sm: "center", md: "center" }}
              p={{ base: 0, sm: 1, md: 2 }}
            >
              <Center>
                <Stack w={"fit-content"} align={"center"} p={2}>
                  <Text
                    textAlign={{ base: "center", md: "left" }}
                    justifyContent={"center"}
                    fontSize={{ base: "2xl", md: "3xl", lg: "6xl", xl: "70px" }}
                    color="#FFECD1"
                    fontWeight={700}
                  >
                    Hello! The name's
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    justifyContent={"center"}
                    fontSize={{ base: "4xl", md: "4xl", lg: "6xl", xl: "70px" }}
                    color="#FFECD1"
                    fontWeight={700}
                  >
                    Zach
                  </Text>

                  <Text
                    textAlign={"center"}
                    fontSize={{ base: "lg", sm: "lg", md: "xl" }}
                    fontWeight={500}
                    color="#FFECD1"
                  >
                    I'm a Frontend Developer with an eye for creating beautiful,
                    intuitive, and responsive user experiences. I have a
                    background in business management and a love for learning
                    new technologies.
                  </Text>

                  <Text
                    as={"i"}
                    textAlign={"center"}
                    fontSize={"lg"}
                    color="#FFECD1"
                  >
                    I have found a passion for web development and have been
                    able to combine the soft skills with the hard skills to be
                    the complete package for any team.
                  </Text>
                </Stack>
              </Center>
              <Center>
                <Stack m={4}>
                  <Heading
                    textAlign="center"
                    fontSize={"4xl"}
                    fontWeight={800}
                    color="#FFECD1"
                  >
                    Based out of
                  </Heading>

                  <Box
                    h={["300px", "300px", "350px", "400px"]}
                    w={["300px", "300px", "350px", "400px"]}
                  >
                    <Image
                      src="/mapStatic.png"
                      borderRadius="10px"
                      alt="Map of the Philadelphia"
                      h={["300px", "300px", "350px", "400px"]}
                      w={["300px", "300px", "350px", "400px"]}
                    />
                  </Box>
                </Stack>
              </Center>
            </Stack>
          </Box>
          {width < 800 ? (
            <Box
              h={"200px"}
              w={"full"}
              bgGradient="linear(to-tl, rgba(117,2,136,1) 0%, rgba(9,9,121,1) 55%, rgba(132,0,255,1) 100%)"
              rounded={"md"}
            />
          ) : (
            <Box
              h={"200px"}
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
              justify={{ base: "center", sm: "center", md: "center" }}
              mt={-12}
              pl={2}
            >
              <Flex>
                <Stack m={2} mt={12}>
                  <Heading
                    fontSize={"3xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                    color="#FFECD1"
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
              <SkillsBar />
            </Stack>
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
};

export default About;

//TODO Breakout this monster into smaller components
//TODO figure out how to make resume button move without having to use a hook..Possibly some grid magic??
