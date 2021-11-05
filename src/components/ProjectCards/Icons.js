import {
  Avatar,
  Tooltip,
  Link as ChakraLink,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsGithub, BsCodeSandbox } from "react-icons/bs";

const MotionAvatar = motion(Avatar);
const MotionIconButton = motion(IconButton);

export const reactIcon = (
  <Tooltip
    hasArrow
    offset={[0, 8]}
    label="React"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
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
  </Tooltip>
);

export const slateIcon = (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="SlateJS"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
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
  </Tooltip>
);

export const jsIcon = (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="JavaScript"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
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
  </Tooltip>
);

export const chakraIcon = (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="Chakra-Ui"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
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
  </Tooltip>
);
export const nextjsIcon = (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="NextJS"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
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
  </Tooltip>
);
export const nextjsIconAlt = (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="NextJS"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
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
  </Tooltip>
);
export const supabaseIcon = (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="Supabase"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
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
      src="/supabase.svg"
    />
  </Tooltip>
);

export const gitHubIcon = (gitHubLink) => (
  <ChakraLink href={gitHubLink} target="_blank">
    <MotionIconButton
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      aria-label="GitHub"
      color="#001524"
      border="hidden"
      borderColor="none"
      isRound={true}
      icon={<BsGithub size="md" />}
    />
  </ChakraLink>
);

export const gitHubIconAlt = (gitHubLink) => (
  <ChakraLink href={gitHubLink} target="_blank">
    <MotionIconButton
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      aria-label="GitHub"
      color="#FFECD1"
      border="hidden"
      borderColor="none"
      isRound={true}
      icon={<BsGithub size="md" />}
    />
  </ChakraLink>
);

export const codeSandboxIcon = (
  <ChakraLink
    href={
      "https://codesandbox.io/s/custom-slatejs-editor-wggz8?file=/pages/index.js"
    }
    target="_blank"
  >
    <MotionAvatar
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="md"
      borderRadius="none"
      bg="transparent"
      src="/codeSandbox.webp"
    />
  </ChakraLink>
);

export const vercelIcon = (vercelLink) => (
  <ChakraLink href={vercelLink} target="_blank">
    <MotionAvatar
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      borderRadius="none"
      bg="transparent"
      src="/vercel-logo.svg"
    />
  </ChakraLink>
);

export const vercelIconAlt = (vercelLink) => (
  <ChakraLink href={vercelLink} target="_blank">
    <MotionIconButton
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      aria-label="GitHub"
      color="#FFECD1"
      border="hidden"
      borderColor="none"
      isRound={true}
      icon={<BsGithub size="md" />}
    />
  </ChakraLink>
);
