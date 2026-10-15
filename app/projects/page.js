"use client";

import {
  Box,
  Button,
  Heading,
  Stack,
  useColorMode,
  Flex,
} from "@chakra-ui/react";


import {
  textColor,
  buttonTextHoverColor,
  buttonHoverColor,
} from "@styles/colorModeStyles";
import Link from "next/link";

import SimpleThreeColumns from "@components/ProjectCards";
import DarkModeSwitchNA from "@components/Navbar/DarkModeSwitchNA";
import useWindowDimensions from "@utils/Hooks/useWindowDimension";
import Navbar from "@components/Navbar";

const Projects = () => {
  const { colorMode } = useColorMode();
  const { width } = useWindowDimensions();
  return (
    <>
      {width > 1000 ? null : (
        <>
          <Button
            position="sticky"
            as={Link}
            href="/"
              color={textColor[colorMode]}
              variant="nav"
              _hover={{
                bg: buttonHoverColor[colorMode],
                color: buttonTextHoverColor[colorMode],
              }}
          >
            Back
          </Button>
          <DarkModeSwitchNA position="sticky" />
        </>
      )}
      <Stack textAlign={"center"} py={{ base: 20, md: 10 }}>
        {width > 1000 ? (
          <Flex flexDir={"row-reverse"}>
            <Navbar />
          </Flex>
        ) : null}
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          color={textColor[colorMode]}
        >
          Projects
        </Heading>
        <Box
          py={{ base: 20, md: 15 }}
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          color={textColor[colorMode]}
        >
          <SimpleThreeColumns />
        </Box>
      </Stack>
    </>
  );
};

export default Projects;
