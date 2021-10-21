import {
  Image,
  Flex,
  Box,
  useColorMode,
  Stack,
  Container,
  Heading,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import DarkModeSwitch from "@components/DarkModeSwitch";

import NextLink from "next/link";

import {
  bgColor,
  textColor,
  buttonColor,
  buttonHoverColor,
  buttonTextHoverColor,
  accentColor,
} from "@styles/colorModeStyles";

import { motion } from "framer-motion";

const Home = () => {
  const MotionButton = motion(Button);
  const { colorMode } = useColorMode();
  return (
    <>
      <Container maxW={"3xl"}>
        <Image
          srcSet="/Signature.svg"
          height={[500, 500, 600, 700, 900]}
          width={[500, 500, 600, 700, 900]}
          marginTop={["-25", "-25", "-25", "-15", "-10"]}
          zIndex="-5"
        />
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          marginTop="-20"
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={textColor[colorMode]}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Front End Web Developer
            </Text>
            <br />
            <Flex
              flexDirection={"row"}
              spacing={10}
              justifyContent={"center"}
              alignSelf={"center"}
              position={"relative"}
              marginTop="5"
            >
              <NextLink href="/about" passHref>
                <MotionButton
                  color={textColor[colorMode]}
                  // margin={0}
                  variant="nav"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  _hover={{
                    bg: buttonHoverColor[colorMode],
                    color: buttonTextHoverColor[colorMode],
                  }}
                >
                  About
                </MotionButton>
              </NextLink>
              <NextLink href="/projects" passHref>
                <MotionButton
                  color={textColor[colorMode]}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  variant="nav"
                  _hover={{
                    bg: buttonHoverColor[colorMode],
                    color: buttonTextHoverColor[colorMode],
                  }}
                >
                  Projects
                </MotionButton>
              </NextLink>
              <NextLink href="/contact" passHref>
                <MotionButton
                  color={textColor[colorMode]}
                  variant="nav"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  _hover={{
                    bg: buttonHoverColor[colorMode],
                    color: buttonTextHoverColor[colorMode],
                  }}
                >
                  Contact
                </MotionButton>
              </NextLink>

              <DarkModeSwitch />
            </Flex>
          </Heading>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
