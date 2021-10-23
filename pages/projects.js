import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useColorMode } from "@chakra-ui/react";
import {
  textColor,
  buttonTextHoverColor,
  buttonHoverColor,
} from "@styles/colorModeStyles";
import Link from "next/link";

const Projects = () => {
  const { colorMode } = useColorMode();
  return (
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
  );
};

export default Projects;
