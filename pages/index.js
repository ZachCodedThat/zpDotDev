import {
  Image,
  Flex,
  Box,
  useColorMode,
  Stack,
  Container,
  Heading,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import DarkModeSwitch from "@components/DarkModeSwitch";

import {
  bgColor,
  textColor,
  buttonColor,
  buttonHoverColor,
  buttonTextHoverColor,
  accentColor,
} from "@styles/colorModeStyles";

import { motion } from "framer-motion";

const Home = () => {
  const MotionButton = motion(Button);
  const { colorMode } = useColorMode();
  return (
    <>
      <Container maxW={"3xl"}>
        <Image
          srcSet="/Signature.svg"
          height={[500, 500, 600, 700, 900]}
          width={[500, 500, 600, 700, 900]}
          marginTop={["-25", "-25", "-25", "-15", "-10"]}
        />
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          marginTop="-20"
        >
          {" "}
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={textColor[colorMode]}
          >
            Front End Web Developer <br />
            <Flex
              flexDirection={"row"}
              spacing={10}
              justifyContent={"center"}
              alignSelf={"center"}
              position={"relative"}
              marginTop="5"
            >
              <MotionButton
                color={textColor[colorMode]}
                // margin={0}
                variant="nav"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                _hover={{
                  bg: buttonHoverColor[colorMode],
                  color: buttonTextHoverColor[colorMode],
                }}
              >
                About
              </MotionButton>
              <MotionButton
                color={textColor[colorMode]}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variant="nav"
                // margin={0}
                _hover={{
                  bg: buttonHoverColor[colorMode],
                  color: buttonTextHoverColor[colorMode],
                }}
              >
                Projects
              </MotionButton>
              <MotionButton
                color={textColor[colorMode]}
                variant="nav"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                // margin={0}
                _hover={{
                  bg: buttonHoverColor[colorMode],
                  color: buttonTextHoverColor[colorMode],
                }}
              >
                Contact
              </MotionButton>

              <DarkModeSwitch />
            </Flex>
          </Heading>
          <Text color={"gray.500"}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
