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

import { NextSeo } from "next-seo";

import useWindowDimensions from "@utils/Hooks/useWindowDimension";

import {
  textColor,
  buttonHoverColor,
  buttonTextHoverColor,
} from "@styles/colorModeStyles";

import { motion } from "framer-motion";
import DarkModeSwitchNA from "@components/Navbar/DarkModeSwitchNA";
import Navbar from "@components/Navbar";

const Home = () => {
  const { width } = useWindowDimensions();

  const { colorMode } = useColorMode();

  return (
    <>
      <NextSeo
        title="Welcome to zacharyp.dev"
        description="This is my personal portfolio used as a landing pad for all of my projects and a centralized location for all of my contact information."
        openGraph={{
          url: "https://www.zacharyp.dev/",
        }}
      />
      <Container maxW={"3xl"}>
        <Image
          src={width < 1000 ? "/SignatureStatic.png" : "/Signature.svg"}
          alt="Animated Signature"
          height={[300, 400, 500, 600, 900]}
          width={[300, 400, 500, 600, 900]}
          mt={["25", "25", "25", "15", "-25"]}
          mb={["25", "20", "15", "10", "0"]}
          mx="auto"
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
            marginTop={["8", "15", "20", "-25", "-32"]}
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
          <Navbar />
          {width < 600 ? <DarkModeSwitchNA /> : null}
        </Stack>
      </Container>
    </>
  );
};

export default Home;
