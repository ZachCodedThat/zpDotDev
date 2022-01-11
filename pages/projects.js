import { Box, Button, Heading, Stack, useColorMode } from "@chakra-ui/react";

import { NextSeo } from "next-seo";

import {
  textColor,
  buttonTextHoverColor,
  buttonHoverColor,
} from "@styles/colorModeStyles";
import Link from "next/link";

import SimpleThreeColumns from "@components/ProjectCards";
import DarkModeSwitchNA from "@components/DarkModeSwitchNA";

const Projects = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <NextSeo
        title="Zachs - Projects"
        description="This page shows off some of my current projects."
        openGraph={{
          url: "https://www.zacharyp.dev/projects",
        }}
      />
      <Link href="/" passHref>
        <Button
          position="sticky"
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
      <DarkModeSwitchNA position="sticky" />
      <Stack textAlign={"center"} py={{ base: 20, md: 15 }}>
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
