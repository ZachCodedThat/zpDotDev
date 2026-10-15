"use client";

import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import customTheme from "@styles/theme";
import GlobalStyle from "@styles/globalStyles";

export default function Providers({ children }) {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyle>{children}</GlobalStyle>
    </ChakraProvider>
  );
}
