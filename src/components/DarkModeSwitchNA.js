import { useColorMode, IconButton, useBoolean } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { dmIconColor } from "@styles/colorModeStyles";

const DarkModeSwitchNA = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant="nav"
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={dmIconColor[colorMode]}
      background="none"
      alignContent="center"
      size="md"
    />
  );
};

export default DarkModeSwitchNA;
