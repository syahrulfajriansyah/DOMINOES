import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";

// Membuat tema kustom
const theme = extendTheme({
  colors: {
    primary: {
      100: "#E6FFFA",
      200: "#B2F5EA",
      300: "#81E6D9",
      400: "#4FD1C5",
      500: "#38B2AC", // Default primary color
      600: "#319795",
      700: "#2C7A7B",
      800: "#285E61",
      900: "#234E52",
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
});

// Menginisialisasi root element
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Membungkus aplikasi dengan ChakraProvider dan tema kustom
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
