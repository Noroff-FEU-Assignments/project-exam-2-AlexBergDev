import { Heading, useColorModeValue } from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function SubHeading({ children, ...props }) {
  return (
    <Heading
      as={"h2"}
      fontSize={{ base: "2xl", md: "3xl" }}
      color={useColorModeValue("brand.950", "brand.50")}
      fontWeight={600}
      textAlign="center"
      letterSpacing={"wider"}
      lineHeight="shorter"
      {...props}
    >
      {children}
    </Heading>
  );
}

SubHeading.propTypes = {
  children: PropTypes.string,
};
