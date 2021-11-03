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
      <Box display="flex" h="100vh" justifyContent="center" alignItems="center">
        <Heading display="inline-block" color={textColor[colorMode]}>
          Cool
        </Heading>
      </Box>
    </>
  );
};

export default About;
