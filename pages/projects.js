import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

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
      <Stack textAlign={"center"} py={{ base: 20, md: 15 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Meeting scheduling <Text color={"orange.400"}>made easy</Text>
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
