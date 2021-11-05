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
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
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
            vercelIcon("https://zachs-blog.vercel.app/"),
          ]}
        />
        <Feature
          image="/sample.jpg"
          title={"Personal Portfolio"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
          tag={[
            colorMode === "light" ? nextjsIcon : nextjsIconAlt,
            reactIcon,
            chakraIcon,
          ]}
          icon={[
            colorMode === "light"
              ? gitHubIcon(
                  "https://github.com/ZachCodedThat/portfolio/tree/adding-pages"
                )
              : gitHubIconAlt(
                  "https://github.com/ZachCodedThat/portfolio/tree/adding-pages"
                ),
            vercelIcon("/"),
          ]}
        />
      </SimpleGrid>
    </Box>
  );
}

// https://codesandbox.io/s/custom-slatejs-editor-wggz8?file=/src/components/CreatePost.js
// Code sandbox for editor.
