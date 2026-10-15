import { motion } from "framer-motion";

import { Flex, Button, useColorMode } from "@chakra-ui/react";

import Link from "next/link";

import DarkModeSwitchNA from "./DarkModeSwitchNA";

import useWindowDimensions from "@utils/Hooks/useWindowDimension";

import {
  textColor,
  buttonHoverColor,
  buttonTextHoverColor,
} from "@styles/colorModeStyles";

export const Navbar = () => {
  const MotionButton = motion(Button);

  const { width } = useWindowDimensions();

  const { colorMode } = useColorMode();

  return (
    <Flex
      flexDirection={"row"}
      justifyContent={"center"}
      alignSelf={"center"}
      marginTop="-10"
    >
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <MotionButton
          as={Link}
          href="/about"
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
        <MotionButton
          as={Link}
          href="/projects"
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
      </Flex>
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <MotionButton
          as={Link}
          href="/contact"
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
        <MotionButton
          as={Link}
          href="https://zacharyp.blog/"
            color={textColor[colorMode]}
            variant="nav"
            whileTap={{ scale: 0.9 }}
            _hover={{
              bg: buttonHoverColor[colorMode],
              color: buttonTextHoverColor[colorMode],
            }}
        >
          Blog
        </MotionButton>
      </Flex>
      {width > 600 ? <DarkModeSwitchNA /> : null}
    </Flex>
  );
};
