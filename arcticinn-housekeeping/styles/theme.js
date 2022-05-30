import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.500",
  },
};

const theme = extendTheme({
  colors: {
    brand: {
      //Light mode
      50: "#EFEFEF", //--AI-light-base
      100: "#F2E0D0", //--AI-light-col1
      200: "#DCE2E9", //--AI-light-col2
      300: "#9298A6", //--AI-light-col3
      400: "#65768C", //--AI-light-col4
      500: "#3D5473", //--AI-light-col5
      //Dark mode
      600: "#A6D85B", //--AI-dark-col5
      700: "#7BA65E", //--AI-dark-col4
      800: "#497365", //--AI-dark-col3
      900: "#2A2D40", //--AI-dark-col2
      950: "#3B3559", //--AI-dark-col1
      980: "#171924", //--AI-dark-base
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("brand.50", "brand.980")(props),
      },
    }),
  },
  components: {
    Button: {
      variants: {
        primary: (props) => ({
          rounded: "none",
          ...brandRing,
          textTransform: "uppercase",
          color: mode("brand.500", "white")(props),
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: mode("brand.500", "brand.50")(props),

          _hover: {
            backgroundColor: mode("brand.500", "white")(props),
            color: mode("white", "black")(props),
          },

          _active: {
            backgroundColor: mode("brand.300", "brand.600")(props),
            borderColor: mode("brand.300", "brand.600")(props),
          },
        }),

        secondary: (props) => ({
          rounded: "none",
          ...brandRing,
          textTransform: "uppercase",
          color: mode("white", "black")(props),
          bg: mode("brand.500", "white")(props),

          _hover: {
            backgroundColor: mode("brand.400", "brand.600")(props),
          },

          _active: {
            backgroundColor: mode("brand.300", "brand.700")(props),
          },
        }),

        invisible: (props) => ({
          backgroundColor: mode("transparent", "transparent")(props),
          color: mode("brand.500", "white")(props),

          _hover: {
            color: mode("brand.400", "brand.50")(props),
          },

          _focus: {
            boxShadow: "none",
          },
        }),
      },
    },
  },
});

export default theme;
