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
import { codeSandboxIcon, gitHubIcon } from "./Icons";

const MotionStack = motion(Stack);

export const Feature = ({ title, text, image, tag, icon }) => {
  return (
    <MotionStack>
      <HStack alignItems="flex-start" justifyContent="space-between">
        {icon
          ? icon.map((item, index) => (
              <>
                <Tag bg="transparent" key={index}>
                  {item}
                </Tag>
              </>
            ))
          : null}
      </HStack>
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
      <HStack alignItems="center" justifyContent="center" p={5}>
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
