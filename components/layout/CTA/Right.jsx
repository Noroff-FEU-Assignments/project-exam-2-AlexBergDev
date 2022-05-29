import React from "react";
import {
  chakra,
  Text,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

import { SubHeading } from "@/components/layout";
import { Button } from "@/components/common";

export default function CTARight({
  subHeading,
  description,
  picture,
  pricingStart,
  currency,
  price,
  pricingEnd,
  btnName,
  btnLink,
}) {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <Flex bg="brand.400">
        <Image
          src={picture}
          alt={subHeading}
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        px={{ base: 16, md: 20, lg: 32 }}
        pb={24}
        pt={{ base: 12, md: 16, lg: 20 }}
        zIndex={3}
        textAlign="center"
      >
        <SubHeading>{subHeading}</SubHeading>
        <chakra.p
          my={8}
          fontSize={"md"}
          color={useColorModeValue("brand.950", "brand.50")}
          fontWeight={400}
          lineHeight={1.4}
          letterSpacing={"wider"}
        >
          {description}
        </chakra.p>
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
            color={useColorModeValue("brand.950", "brand.600")}
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
      </Flex>
    </SimpleGrid>
  );
}

CTARight.propTypes = {
  subHeading: PropTypes.string,
  description: PropTypes.string,
  picture: PropTypes.string,
  pricingStart: PropTypes.string,
  currency: PropTypes.string,
  pricingEnd: PropTypes.string,
  btnName: PropTypes.string,
  btnLink: PropTypes.string,
};
