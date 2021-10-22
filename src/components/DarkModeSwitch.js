import { useColorMode, IconButton, useBoolean } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { dmIconColor } from "@styles/colorModeStyles";
import { motion } from "framer-motion";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const MotionIconButton = motion(IconButton);

  const buttonAnimation = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.9,
        type: "spring",
        damping: 30,
        stiffness: 100,
      },
    },
    exit: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <MotionIconButton
      variant="nav"
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={dmIconColor[colorMode]}
      background="none"
      alignContent="center"
      size="md"
      variants={buttonAnimation}
      initial="hidden"
      animate="visible"
    />
  );
};

export default DarkModeSwitch;
