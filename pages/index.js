import { Flex, Box, useColorMode, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { bgColor, textColor } from "@styles/colorModeStyles";

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Stack alignItems="center">
        <Image src="/Signature.svg" height={500} width={500} />

        <Flex
          as="main"
          justifyContent="center"
          flexDirection="column"
          bg={bgColor[colorMode]}
          color={textColor[colorMode]}
          px={[4, 4, 4]}
          mt={[4, 8, 8]}
        >
          Welcome to ThunderDome
        </Flex>
      </Stack>
    </>
  );
};

export default Home;
