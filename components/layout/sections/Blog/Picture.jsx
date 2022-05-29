import React from "react";
import { useColorModeValue, Box, Image, Text } from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function ArticlePicture({ image, title, source }) {
  return (
    <Box mb={6}>
      <Image
        src={image}
        alt={title}
        fit="cover"
        w="full"
        h={{ base: 64, md: "340px", lg: "420px", xl: "480px" }}
        bg="gray.100"
        loading="lazy"
        boxShadow="md"
      />
      <Text
        fontSize="xs"
        mt={2}
        fontWeight={600}
        color={useColorModeValue("brand.400", "brand.600")}
      >
        Source: {source}
      </Text>
    </Box>
  );
}

ArticlePicture.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  source: PropTypes.string,
};
