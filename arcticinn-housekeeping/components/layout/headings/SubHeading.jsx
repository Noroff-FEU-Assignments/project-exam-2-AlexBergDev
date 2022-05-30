import { Heading, useColorModeValue } from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function SubHeading({ children, ...props }) {
  return (
    <Heading
      as={"h2"}
      fontSize={{ base: "lg", md: "xl" }}
      color={useColorModeValue("brand.980", "brand.50")}
      fontWeight={700}
      lineHeight={0.8}
      mb={4}
      textTransform={"capitalize"}
      {...props}
    >
      {children}
    </Heading>
  );
}

SubHeading.propTypes = {
  children: PropTypes.string,
};
