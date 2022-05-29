import { Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function HeadingDescription(props) {
  return (
    <Text
      fontSize={useBreakpointValue({ base: "sm", md: "md" })}
      fontWeight={500}
      lineHeight={1.2}
      letterSpacing={"wider"}
      mb={8}
      px={4}
      color={useColorModeValue("brand.950", "brand.50")}
      textAlign={"center"}
    >
      {props.children}
    </Text>
  );
}

HeadingDescription.propTypes = {
  props: PropTypes.string,
};
