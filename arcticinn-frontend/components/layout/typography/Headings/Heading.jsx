import {
  Heading,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function RenderHeading(props) {
  return (
    <Heading
      as={"h1"}
      size={useBreakpointValue({ base: "lg", md: "xl" })}
      fontWeight={700}
      lineHeight={0.8}
      mt={8}
      mb={4}
      px={4}
      color={useColorModeValue("brand.500", "white")}
      textTransform={"capitalize"}
      letterSpacing={"wider"}
      textAlign={"center"}
    >
      {props.children}
    </Heading>
  );
}

RenderHeading.propTypes = {
  props: PropTypes.string,
};
