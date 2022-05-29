import { Text, useColorModeValue } from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function ArticleText({ children, ...props }) {
  return (
    <Text
      fontSize="md"
      color={useColorModeValue("brand.980", "brand.50")}
      fontWeight={300}
      letterSpacing={"wider"}
      lineHeight="shorter"
      mt={4}
      mb={3}
      {...props}
    >
      {children}
    </Text>
  );
}

ArticleText.propTypes = {
  children: PropTypes.string,
};
