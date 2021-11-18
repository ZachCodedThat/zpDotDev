import {
  Image,
  Flex,
  Box,
  useColorMode,
  Stack,
  Container,
  Heading,
  Button,
} from "@chakra-ui/react";

import Link from "next/link";

// import { useRef, useEffect } from "react";

import useWindowDimensions from "@utils/Hooks/useWindowDimension";

import {
  textColor,
  buttonHoverColor,
  buttonTextHoverColor,
} from "@styles/colorModeStyles";

import { motion } from "framer-motion";
import DarkModeSwitchNA from "@components/DarkModeSwitchNA";

const Home = () => {
  // const rendered = useRef(false);

  // const MotionBox = rendered.current ? Box : motion(Box);
  // const SigImage = rendered.current ? "/SignatureStatic.svg" : "/Signature.svg";

  // useEffect(() => {
  //   rendered.current = true;
  // }, []);

  const MotionButton = motion(Button);

  const { width } = useWindowDimensions();

  const { colorMode } = useColorMode();

  return (
    <>
      <Container maxW={"3xl"}>
        <Image
          srcSet={width > 1000 ? "/Signature.svg" : "/SignatureStatic.svg"}
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
          <Box
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
          </Box>

          <Flex
            flexDirection={"row"}
            justifyContent={"center"}
            alignSelf={"center"}
            marginTop="-10"
          >
            <Link href="./about" passHref>
              <MotionButton
                color={textColor[colorMode]}
                variant="nav"
                whileTap={{ scale: 0.9 }}
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
                _hover={{
                  bg: buttonHoverColor[colorMode],
                  color: buttonTextHoverColor[colorMode],
                }}
              >
                Contact
              </MotionButton>
            </Link>
            {width > 600 ? <DarkModeSwitchNA /> : null}
          </Flex>
          {width < 600 ? <DarkModeSwitchNA /> : null}
        </Stack>
      </Container>
    </>
  );
};

export default Home;
