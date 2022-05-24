import {
  Text,
  Stack,
  Image as ChakraImage,
  Tag,
  HStack,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import { useState } from "react";

import { motion } from "framer-motion";

const MotionStack = motion(Stack);

export const Feature = ({
  title,
  text,
  image,
  tag,
  previewLink,

  staticImage,
  altText,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

  const handleMouse = () => setIsHovered(!isHovered);

  return (
    <MotionStack>
      <LinkBox
        border="4px solid"
        borderRadius="md"
        maxH={isHovered ? "100%" : "auto"}
      >
        <LinkOverlay
          href={previewLink}
          isExternal
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouse}
        >
          <ChakraImage
            src={isHovered ? image : staticImage}
            alt={altText}
            borderRadius="5%"
            p="10px"
            cursor={"pointer"}
          />
        </LinkOverlay>
      </LinkBox>

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
