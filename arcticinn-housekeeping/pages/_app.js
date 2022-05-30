import "../styles/globals.css";
import theme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

import PropTypes from "prop-types";

import { AuthProvider } from "@/context/AuthContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};
