import { Avatar, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionAvatar = motion(Avatar);
// const MotionIcon = motion(Icon);

export const reactIcon = (
  <MotionAvatar
    whileHover={{
      filter: "grayscale(0%)",
      scale: 1.2,
      transition: { duration: 0.5 },
    }}
    filter="grayscale(100%)"
    size="md"
    name="react"
    bg="transparent"
    src="/react.png"
  />
);

export const slateIcon = (
  <MotionAvatar
    whileHover={{
      filter: "grayscale(0%)",
      scale: 1.2,
      transition: { duration: 0.5 },
    }}
    size="sm"
    filter="grayscale(100%)"
    borderRadius="2px"
    name="react"
    bg="transparent"
    src="/slate.avif"
  />
);

export const jsIcon = (
  <MotionAvatar
    whileHover={{
      filter: "grayscale(0%)",
      scale: 1.2,
      transition: { duration: 0.5 },
    }}
    size="sm"
    filter="grayscale(100%)"
    borderRadius="none"
    name="react"
    bg="transparent"
    src="/JSicon.jpg"
  />
);

export const chakraIcon = (
  <MotionAvatar
    whileHover={{
      filter: "grayscale(0%)",
      scale: 1.2,
      transition: { duration: 0.5 },
    }}
    size="sm"
    filter="grayscale(100%)"
    borderRadius="none"
    name="react"
    bg="transparent"
    src="/chakraui.svg"
  />
);
export const nextjsIcon = (
  <MotionAvatar
    whileHover={{
      filter: "grayscale(0%)",
      scale: 1.2,
      transition: { duration: 0.5 },
    }}
    size="sm"
    filter="grayscale(100%)"
    borderRadius="none"
    bg="transparent"
    src="/nextjsIcon.svg"
  />
);
export const nextjsIconAlt = (
  <MotionAvatar
    whileHover={{
      filter: "grayscale(0%)",
      scale: 1.2,
      transition: { duration: 0.5 },
    }}
    size="sm"
    filter="grayscale(100%)"
    borderRadius="none"
    bg="transparent"
    src="/nextjsIconAlt.svg"
  />
);
