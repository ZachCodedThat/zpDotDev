import { Text, Stack, Flex, Image as ChakraImage } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionStack = motion(Stack);

export const Feature = ({ title, text, image }) => {
  return (
    <MotionStack
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      align={"center"}
    >
      <Flex align={"center"} justify={"center"} mb={1}>
        <ChakraImage src={image} borderRadius="5%" p="10px" />
      </Flex>
      <Text
        fontWeight={600}
        fontSize={{ base: "lg", sm: "xl" }}
        justify={"center"}
        align={"center"}
      >
        {title}
      </Text>
      <Text color={"gray.600"}>{text}</Text>
    </MotionStack>
  );
};
