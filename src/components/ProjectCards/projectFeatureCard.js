import {
  Text,
  Stack,
  Flex,
  Image as ChakraImage,
  Tag,
  HStack,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { borderColor } from "@styles/colorModeStyles";
import { motion } from "framer-motion";

const MotionStack = motion(Stack);

export const Feature = ({ title, text, image, tag }) => {
  return (
    <MotionStack align={"center"}>
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
      <HStack p={5}>
        {tag.map((item, index) => (
          <>
            <Tag bg="transparent" key={index}>
              {item}
            </Tag>
          </>
        ))}
      </HStack>
    </MotionStack>
  );
};
