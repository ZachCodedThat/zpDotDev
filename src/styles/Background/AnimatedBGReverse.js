import styles from "./BGReverse.module.css";
import {
  UnorderedList,
  ListItem,
  chakra,
  useColorMode,
} from "@chakra-ui/react";
import { animatedBGColor, animatedBGColorAlt } from "@styles/colorModeStyles";
const BackgroundReverse = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <chakra.ul className={styles.circlesReverse}>
        <chakra.li bg="gold" filter="blur(1px)"></chakra.li>
        <chakra.li bg="gold" filter="blur(1px)"></chakra.li>
        <chakra.li bg="gold" filter="blur(2px)"></chakra.li>
        <chakra.li bg="gold" filter="blur(4px)"></chakra.li>
      </chakra.ul>
    </>
  );
};

export default BackgroundReverse;
