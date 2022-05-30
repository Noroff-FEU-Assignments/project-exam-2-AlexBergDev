import {
  Heading,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function RenderHeading({ children, ...props }) {
  return (
    <Heading
      as={"h1"}
      size={useBreakpointValue({ base: "lg", md: "xl" })}
      fontWeight={700}
      lineHeight={0.8}
      mt={8}
      mb={4}
      color={useColorModeValue("brand.980", "brand.50")}
      textTransform={"capitalize"}
      {...props}
    >
      {children}
    </Heading>
  );
}

RenderHeading.propTypes = {
  children: PropTypes.string,
};
