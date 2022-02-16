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
      </Flex>
      <Flex flexDirection={{ base: "column", md: "row" }}>
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
        <Link href="https://zacharyp.blog/">
          <MotionButton
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
        </Link>
      </Flex>
      {width > 600 ? <DarkModeSwitchNA /> : null}
    </Flex>
  );
};
