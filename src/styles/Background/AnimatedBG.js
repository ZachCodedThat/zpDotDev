import styles from "./BG.module.css";
import {
  UnorderedList,
  ListItem,
  chakra,
  useColorMode,
} from "@chakra-ui/react";
import { animatedBGColor, animatedBGColorAlt } from "@styles/colorModeStyles";
const Background = () => {
  const { colorMode } = useColorMode();
  return (
    <chakra.ul className={styles.circles}>
      <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
      <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
      <chakra.li bg={animatedBGColorAlt[colorMode]}></chakra.li>
      <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
      <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
      <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
      <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
      <chakra.li bg={animatedBGColorAlt[colorMode]}></chakra.li>
      <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
      <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
      <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
      <chakra.li bg={animatedBGColorAlt[colorMode]}></chakra.li>
    </chakra.ul>
  );
};

export default Background;
