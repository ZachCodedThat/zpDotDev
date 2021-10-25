import {
  Box,
  Button,
  Heading,
  Avatar,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

import {
  textColor,
  buttonTextHoverColor,
  buttonHoverColor,
} from "@styles/colorModeStyles";
import Link from "next/link";
import useSound from "use-sound";

const Projects = () => {
  const soundBite = "/KEKW.mp3";
  const [play] = useSound(soundBite, { volume: 0.05 });
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
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color={textColor[colorMode]}
      >
        <Heading size="2xl">
          Nope not here either...
          <Avatar
            bg="none"
            onMouseDown={play}
            size="md"
            src="/kekw-emote.jpg"
            cursor="pointer"
          ></Avatar>
        </Heading>
      </Box>
    </>
  );
};

export default Projects;
