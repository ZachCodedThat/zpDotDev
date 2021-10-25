import React from "react";
import { useColorMode, Box, Button, Heading } from "@chakra-ui/react";
import {
  textColor,
  buttonHoverColor,
  buttonTextHoverColor,
} from "@styles/colorModeStyles";
import Link from "next/link";

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color={textColor[colorMode]}
      >
        <Heading size="2xl">The princess is in another castle...</Heading>
      </Box>
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
    </>
  );
};

export default About;
