import React from "react";
import { useColorModeValue, Box, Image, Text } from "@chakra-ui/react";

import PropTypes from "prop-types";

import { SubHeading } from "@/components/layout";
import { Button } from "@/components/common";

export default function RentalSection({
  image,
  title,
  description,
  pricingStart,
  currency,
  price,
  pricingEnd,
  btnName,
  btnLink,
}) {
  return (
    <Box mb={8} textAlign={{ base: "center", md: "start" }}>
      <Image
        src={image}
        alt={title}
        fit="cover"
        w="full"
        h={64}
        bg="gray.100"
        loading="lazy"
        boxShadow="md"
      />
      <Box px={{ base: 16, md: 0 }}>
        <SubHeading mt={10} textAlign={{ base: "center", md: "start" }}>
          {title}
        </SubHeading>
        <Text
          my={8}
          fontSize={"md"}
          color={useColorModeValue("brand.950", "brand.50")}
          fontWeight={400}
          lineHeight={1.4}
          letterSpacing={"wider"}
        >
          {description}
        </Text>
        <Box display="inline-flex" mb={2} gap={2}>
          <Text
            fontWeight={400}
            lineHeight={1.4}
            letterSpacing={"wider"}
            color={useColorModeValue("brand.950", "brand.50")}
          >
            {pricingStart}
          </Text>
          <Text
            fontSize={"xl"}
            fontWeight={600}
            lineHeight={1.2}
            letterSpacing={"wider"}
            color={useColorModeValue("brand.980", "brand.600")}
          >
            {currency} {price}
          </Text>
        </Box>
        <Text
          mb={8}
          fontSize={"sm"}
          color={useColorModeValue("brand.500", "brand.50")}
          fontWeight={400}
          lineHeight={1.4}
          letterSpacing={"wider"}
        >
          {pricingEnd}
        </Text>
        <Button href={btnLink} variant="primary">
          {btnName}
        </Button>
      </Box>
    </Box>
  );
}

RentalSection.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  pricingStart: PropTypes.string,
  currency: PropTypes.string,
  price: PropTypes.number,
  pricingEnd: PropTypes.string,
  btnName: PropTypes.string,
  btnLink: PropTypes.string,
};
