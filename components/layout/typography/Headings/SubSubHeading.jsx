import { Heading, useColorModeValue } from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function SubSubHeading({ children, ...props }) {
  return (
    <Heading
      as={"h2"}
      fontSize={{ base: "xl", md: "2xl" }}
      fontWeight={600}
      mt={{ base: 6, md: 6 }}
      mb={{ base: 2, md: 2 }}
      color={useColorModeValue("brand.500", "brand.50")}
      lineHeight="shorter"
      letterSpacing={"wider"}
      textTransform={"capitalize"}
      {...props}
    >
      {children}
    </Heading>
  );
}

SubSubHeading.propTypes = {
  children: PropTypes.string,
};
