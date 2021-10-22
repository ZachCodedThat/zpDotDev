import { Box } from "@chakra-ui/layout";
import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { textColor } from "@styles/colorModeStyles";

const Projects = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      color={textColor[colorMode]}
    >
      Project
    </Box>
  );
};

export default Projects;
