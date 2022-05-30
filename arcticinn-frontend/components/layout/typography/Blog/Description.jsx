import { Text, useColorModeValue } from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function ArticleDescription({ children, ...props }) {
  return (
    <Text
      fontSize="md"
      color={useColorModeValue("brand.980", "brand.50")}
      fontWeight={500}
      letterSpacing={"wider"}
      lineHeight="shorter"
      mt={8}
      mb={3}
      {...props}
    >
      {children}
    </Text>
  );
}

ArticleDescription.propTypes = {
  children: PropTypes.string,
};
