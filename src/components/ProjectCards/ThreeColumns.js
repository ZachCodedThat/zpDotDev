import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";

import { Feature } from "./projectFeatureCard";

import {
  reactIcon,
  slateIcon,
  chakraIcon,
  nextjsIcon,
  nextjsIconAlt,
  supabaseIcon,
  nodeIcon,
  npmIcon,
  cssIcon,
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
          previewLink="https://github.com/ZachCodedThat/Zachs-Blog/tree/main/src/components/Editor"
          altText={"Preview of the custom Slate editor"}
          staticImage="https://res.cloudinary.com/dey85zjmf/image/upload/v1641851034/blog/blogPlatformStatic_hg5qmf.png"
          title={"Customized Slate Editor"}
          text={
            "Fully custom Slate editor capable of live MD preview which will show you exactly what your post will look like on the page."
          }
          tag={[
            colorMode === "light"
              ? nextjsIcon("grayscale(0%)")
              : nextjsIconAlt("grayscale(0%)"),
            slateIcon("grayscale(0%)"),
            reactIcon("grayscale(0%)"),
            chakraIcon("grayscale(0%)"),
          ]}
        />

        <Feature
          image="https://res.cloudinary.com/dey85zjmf/image/upload/v1641842995/blog/blogGif_e5pxzt.gif"
          previewLink="https://github.com/ZachCodedThat/Zachs-Blog/tree/main"
          altText={"Preview of my personal blog platform"}
          staticImage="https://res.cloudinary.com/dey85zjmf/image/upload/v1641844710/blog/blogStatic_abzsea.png"
          title={"Personal Blog"}
          text={
            "Blog platform built on NextJS and hooked to a Supabase backend. This also utilizes my custom Slate editor to provide me with an easy dev only way to post content and see how it will look before it is posted."
          }
          tag={[
            colorMode === "light"
              ? nextjsIcon("grayscale(0%)")
              : nextjsIconAlt("grayscale(0%)"),
            slateIcon("grayscale(0%)"),
            reactIcon("grayscale(0%)"),
            chakraIcon("grayscale(0%)"),
            supabaseIcon("grayscale(0%)"),
          ]}
        />
        <Feature
          image="https://res.cloudinary.com/dey85zjmf/image/upload/v1641842941/blog/profileGif_dys6kh.gif"
          previewLink="https://github.com/ZachCodedThat/portfolio"
          altText={"Preview of my personal portfolio"}
          staticImage="https://res.cloudinary.com/dey85zjmf/image/upload/v1641844710/blog/PortfolioStatic_vsxtg8.png"
          title={"Personal Portfolio"}
          text={
            "My personal portfolio built on NextJS and themed using Chakra-UI"
          }
          tag={[
            colorMode === "light"
              ? nextjsIcon("grayscale(0%)")
              : nextjsIconAlt("grayscale(0%)"),
            reactIcon("grayscale(0%)"),
            chakraIcon("grayscale(0%)"),
          ]}
        />

        <Feature
          image="https://res.cloudinary.com/dey85zjmf/image/upload/v1644167944/ezgif.com-gif-maker_4_xglxpc.gif"
          previewLink="https://github.com/ZachCodedThat/gitHubSearch"
          altText={"Preview of my GitHub username search"}
          staticImage="githubSearchStatic.png"
          title={"Github Username Search"}
          text={
            "A tool I created to learn more about how to manage searching data from an API and all of the edge cases that come into play."
          }
          tag={[
            colorMode === "light"
              ? nextjsIcon("grayscale(0%)")
              : nextjsIconAlt("grayscale(0%)"),
            nodeIcon("grayscale(0%)"),
            reactIcon("grayscale(0%)"),
            cssIcon("grayscale(0%)"),
          ]}
        />
        <Feature
          image="/NPM.jpg"
          previewLink="https://github.com/ZachCodedThat/create-zp-cli-public"
          altText={"NPM page for create-zp-cli"}
          staticImage="/NPM.jpg"
          title={"Create-zp-cli"}
          text={
            "A tool I created initally for myself to get projects off of the ground faster and has evolved into something everyone can use. I will be adding features to this over time."
          }
          tag={[nodeIcon("grayscale(0%)"), npmIcon("grayscale(0%)")]}
        />
      </SimpleGrid>
    </Box>
  );
}
//TODO:Fix Github Icon for project cards, does not work on mobile platforms
// https://codesandbox.io/s/custom-slatejs-editor-wggz8?file=/src/components/CreatePost.js
// Code sandbox for editor.
