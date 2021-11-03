import styles from "./BG.module.css";
import {
  UnorderedList,
  ListItem,
  chakra,
  useColorMode,
} from "@chakra-ui/react";
import { animatedBGColor, animatedBGColorAlt } from "@styles/colorModeStyles";
import BackgroundReverse from "./AnimatedBGReverse";
const Background = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <chakra.ul className={styles.circles}>
        <chakra.li
          filter="blur(2px)"
          bg={animatedBGColor[colorMode]}
        ></chakra.li>
        <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
        <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
        <chakra.li bg={animatedBGColorAlt[colorMode]}></chakra.li>
        <chakra.li bg={animatedBGColorAlt[colorMode]}></chakra.li>
        <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
        <chakra.li
          filter="blur(1px)"
          bg={animatedBGColor[colorMode]}
        ></chakra.li>
        <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
        <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
        <chakra.li
          filter="blur(3px)"
          bg={animatedBGColor[colorMode]}
        ></chakra.li>
        <chakra.li bg={animatedBGColorAlt[colorMode]}></chakra.li>
        <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
        <chakra.li bg={animatedBGColor[colorMode]}></chakra.li>
        <chakra.li bg={animatedBGColorAlt[colorMode]}></chakra.li>
      </chakra.ul>
      {/* <chakra.ul className={styles.circlesReverse}>
        <chakra.li bg="red"></chakra.li>
      </chakra.ul> */}
    </>
  );
};

export default Background;
