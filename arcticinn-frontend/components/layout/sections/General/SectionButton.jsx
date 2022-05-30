import React from "react";
import { useColorModeValue, Box, Image, Text } from "@chakra-ui/react";

import PropTypes from "prop-types";

import { SubSubHeading } from "@/components/layout";
import { Button } from "@/components/common";

export default function SectionButton({
  image,
  title,
  description,
  button,
  variant,
  href,
}) {
  return (
    <Box mb={14}>
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
      <SubSubHeading>{title}</SubSubHeading>
      <Text
        fontSize={"sm"}
        color={useColorModeValue("brand.950", "brand.50")}
        fontWeight={400}
        lineHeight={1.4}
        letterSpacing={"wider"}
      >
        {description}
      </Text>
      <Button href={href} variant={variant} mt={5}>
        {button}
      </Button>
    </Box>
  );
}

SectionButton.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.string,
  variant: PropTypes.string,
  href: PropTypes.string,
};
