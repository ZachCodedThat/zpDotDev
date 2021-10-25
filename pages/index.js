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

import Link from "next/link";

import { useRef, useEffect } from "react";

import useWindowDimensions from "@utils/Hooks/useWindowDimension";

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
  const rendered = useRef(false);
  const MotionButton = rendered.current ? Button : motion(Button);
  const MotionBox = rendered.current ? Box : motion(Box);
  // const SigImage = rendered.current ? "/SignatureStatic.svg" : "/Signature.svg";
  const { width } = useWindowDimensions();
  useEffect(() => {
    rendered.current = true;
  }, []);

  const { colorMode } = useColorMode();

  const buttonAnimation = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.9,
        type: "spring",
        damping: 30,
        stiffness: 100,
      },
    },
    exit: {
      y: 0,
      opacity: 1,
    },
  };
  const headerAnimation = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.5,
        type: "spring",
        damping: 30,
        stiffness: 100,
        when: "beforeChildren",
      },
    },
    exit: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Container maxW={"3xl"}>
        <Image
          srcSet="/Signature.svg"
          height={[500, 500, 600, 700, 900]}
          width={[500, 500, 600, 700, 900]}
          marginTop={["-25", "-25", "-25", "-15", "-10"]}
        />
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          // marginTop="-32"
        >
          <MotionBox
            variants={headerAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            marginTop={["-10", "-15", "-20", "-25", "-32"]}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              color={textColor[colorMode]}
            >
              Front End Web Developer
            </Heading>
          </MotionBox>

          <Flex
            flexDirection={"row"}
            justifyContent={"center"}
            alignSelf={"center"}
            marginTop="-10"
          >
            <Link href="./about" passHref>
              <MotionButton
                color={textColor[colorMode]}
                // margin={0}
                variant="nav"
                whileTap={{ scale: 0.9 }}
                variants={buttonAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                _hover={{
                  bg: buttonHoverColor[colorMode],
                  color: buttonTextHoverColor[colorMode],
                }}
              >
                About
              </MotionButton>
            </Link>
            <Link href="/projects" passHref>
              <MotionButton
                color={textColor[colorMode]}
                whileTap={{ scale: 0.9 }}
                variant="nav"
                variants={buttonAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                _hover={{
                  bg: buttonHoverColor[colorMode],
                  color: buttonTextHoverColor[colorMode],
                }}
              >
                Projects
              </MotionButton>
            </Link>
            <Link href="/contact" passHref>
              <MotionButton
                color={textColor[colorMode]}
                variant="nav"
                whileTap={{ scale: 0.9 }}
                variants={buttonAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                _hover={{
                  bg: buttonHoverColor[colorMode],
                  color: buttonTextHoverColor[colorMode],
                }}
              >
                Contact
              </MotionButton>
            </Link>
            {width > 600 ? <DarkModeSwitch /> : null}
          </Flex>
          {width < 600 ? <DarkModeSwitch /> : null}
        </Stack>
      </Container>
    </>
  );
};

export default Home;
