import { Box, SimpleGrid, Divider, useColorMode } from "@chakra-ui/react";

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

export default function SimpleThreeColumns() {
  const { colorMode } = useColorMode();
  return (
    <Box p={{ base: 2, sm: 3, md: 6, lg: 8, xl: 20 }}>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        columnGap={20}
        rowGap={{ base: 10 }}
      >
        <Feature
          image="/sample.jpg"
          title={"Customized Slate Editor"}
          text={
            "Fully custom Slate editor capable of live MD preview which will show you exactly what your post will look like on the page."
          }
          tag={[
            colorMode === "light" ? nextjsIcon : nextjsIconAlt,
            slateIcon,
            reactIcon,
            chakraIcon,
          ]}
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
          image="/sample.jpg"
          title={"Personal Blog"}
          text={
            "Blog platform built on NextJS and hooked to a Supabase backend. This also utilizes my custom Slate editor to provide me with an easy dev only way to post content and see how it will look before it is posted."
          }
          tag={[
            colorMode === "light" ? nextjsIcon : nextjsIconAlt,
            slateIcon,
            chakraIcon,
            supabaseIcon,
          ]}
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
              ? vercelIcon("https://zachs-blog.vercel.app/")
              : vercelIconAlt("https://zachs-blog.vercel.app/"),
          ]}
        />
        <Feature
          image="/sample.jpg"
          title={"Personal Portfolio"}
          text={
            "My personal portfolio built on NextJS and themed using Chakra-UI"
          }
          tag={[
            colorMode === "light" ? nextjsIcon : nextjsIconAlt,
            reactIcon,
            chakraIcon,
          ]}
          icon={[
            colorMode === "light"
              ? gitHubIcon("https://github.com/ZachCodedThat/portfolio/tree/V2")
              : gitHubIconAlt(
                  "https://github.com/ZachCodedThat/portfolio/tree/V2"
                ),
            colorMode === "light" ? vercelIcon("/") : vercelIconAlt("/"),
          ]}
        />
      </SimpleGrid>
    </Box>
  );
}

// https://codesandbox.io/s/custom-slatejs-editor-wggz8?file=/src/components/CreatePost.js
// Code sandbox for editor.
