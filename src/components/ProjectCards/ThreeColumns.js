import { Box, SimpleGrid, Avatar, useColorMode } from "@chakra-ui/react";

import { Feature } from "./projectFeatureCard";

import {
  reactIcon,
  slateIcon,
  jsIcon,
  chakraIcon,
  nextjsIcon,
  nextjsIconAlt,
  gitHubIcon,
  codeSandboxIcon,
  supabaseIcon,
  gitHubIconAlt,
  vercelIcon,
  vercelIconAlt,
} from "./Icons";

import useWindowDimensions from "@utils/Hooks/useWindowDimension";

export default function SimpleThreeColumns() {
  const { colorMode } = useColorMode();

  const { width } = useWindowDimensions();

  return (
    <Box p={{ base: 2, sm: 3, md: 6, lg: 8, xl: 25 }}>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        columnGap={20}
        rowGap={{ base: 10 }}
      >
        <Feature
          image="https://res.cloudinary.com/dey85zjmf/image/upload/v1641841650/blog/editorGif_o1suhb.gif"
          staticImage="https://res.cloudinary.com/dey85zjmf/image/upload/v1641851034/blog/blogPlatformStatic_hg5qmf.png"
          title={"Customized Slate Editor"}
          text={
            "Fully custom Slate editor capable of live MD preview which will show you exactly what your post will look like on the page."
          }
          tag={
            width > 1100
              ? [
                  colorMode === "light"
                    ? nextjsIcon("grayscale(100%)")
                    : nextjsIconAlt("grayscale(100%)"),
                  slateIcon("grayscale(100%)"),
                  reactIcon("grayscale(100%)"),
                  chakraIcon("grayscale(100%)"),
                ]
              : [
                  colorMode === "light"
                    ? nextjsIcon("grayscale(0%)")
                    : nextjsIconAlt("grayscale(0%)"),
                  slateIcon("grayscale(0%)"),
                  reactIcon("grayscale(0%)"),
                  chakraIcon("grayscale(0%)"),
                ]
          }
          icon={[
            colorMode === "light"
              ? gitHubIcon(
                  "https://github.com/ZachCodedThat/Zachs-Blog/tree/Slate-rework/src/components/Editor"
                )
              : gitHubIconAlt(
                  "https://github.com/ZachCodedThat/Zachs-Blog/tree/Slate-rework/src/components/Editor"
                ),
            codeSandboxIcon,
          ]}
        />
        <Feature
          image="https://res.cloudinary.com/dey85zjmf/image/upload/v1641842995/blog/blogGif_e5pxzt.gif"
          staticImage="https://res.cloudinary.com/dey85zjmf/image/upload/v1641844710/blog/blogStatic_abzsea.png"
          title={"Personal Blog"}
          text={
            "Blog platform built on NextJS and hooked to a Supabase backend. This also utilizes my custom Slate editor to provide me with an easy dev only way to post content and see how it will look before it is posted."
          }
          tag={
            width > 1100
              ? [
                  colorMode === "light"
                    ? nextjsIcon("grayscale(100%)")
                    : nextjsIconAlt("grayscale(100%)"),
                  slateIcon("grayscale(100%)"),
                  reactIcon("grayscale(100%)"),
                  chakraIcon("grayscale(100%)"),
                  supabaseIcon("grayscale(100%)"),
                ]
              : [
                  colorMode === "light"
                    ? nextjsIcon("grayscale(0%)")
                    : nextjsIconAlt("grayscale(0%)"),
                  slateIcon("grayscale(0%)"),
                  reactIcon("grayscale(0%)"),
                  chakraIcon("grayscale(0%)"),
                  supabaseIcon("grayscale(0%)"),
                ]
          }
          icon={[
            colorMode === "light"
              ? gitHubIcon(
                  "https://github.com/ZachCodedThat/Zachs-Blog/tree/Slate-rework"
                )
              : gitHubIconAlt(
                  "https://github.com/ZachCodedThat/Zachs-Blog/tree/Slate-rework"
                ),
            ,
            colorMode === "light"
              ? vercelIcon(
                  "https://zachs-blog-bxzhdxv85-zachcodedthat.vercel.app/"
                )
              : vercelIconAlt(
                  "https://zachs-blog-bxzhdxv85-zachcodedthat.vercel.app/"
                ),
          ]}
        />
        <Feature
          image="https://res.cloudinary.com/dey85zjmf/image/upload/v1641842941/blog/profileGif_dys6kh.gif"
          staticImage="https://res.cloudinary.com/dey85zjmf/image/upload/v1641844710/blog/PortfolioStatic_vsxtg8.png"
          title={"Personal Portfolio"}
          text={
            "My personal portfolio built on NextJS and themed using Chakra-UI"
          }
          tag={
            width > 1100
              ? [
                  colorMode === "light"
                    ? nextjsIcon("grayscale(100%)")
                    : nextjsIconAlt("grayscale(100%)"),
                  reactIcon("grayscale(100%)"),
                  chakraIcon("grayscale(100%)"),
                ]
              : [
                  colorMode === "light"
                    ? nextjsIcon("grayscale(0%)")
                    : nextjsIconAlt("grayscale(0%)"),
                  reactIcon("grayscale(0%)"),
                  chakraIcon("grayscale(0%)"),
                ]
          }
          icon={[
            colorMode === "light"
              ? gitHubIcon("https://github.com/ZachCodedThat/portfolio")
              : gitHubIconAlt("https://github.com/ZachCodedThat/portfolio"),
            colorMode === "light" ? vercelIcon("/") : vercelIconAlt("/"),
          ]}
        />
      </SimpleGrid>
    </Box>
  );
}
//TODO:Fix Github Icon for project cards, does not work on mobile platforms
// https://codesandbox.io/s/custom-slatejs-editor-wggz8?file=/src/components/CreatePost.js
// Code sandbox for editor.
