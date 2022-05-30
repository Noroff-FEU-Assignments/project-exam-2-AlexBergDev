import React from "react";
import {
  useColorModeValue,
  Box,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

import { SubSubHeading } from "@/components/layout";
import { Button } from "@/components/common";

export default function BlogCard({
  image,
  title,
  description,
  button,
  variant,
  href,
}) {
  return (
    <LinkBox>
      <Box bg={useColorModeValue("brand.100", "brand.400")} textAlign="center">
        <Image
          src={image}
          alt={title}
          fit="cover"
          w="full"
          h={{ base: 64, md: 64 }}
          bg="gray.100"
          loading="lazy"
        />
        <Box px={10} py={5}>
          <SubSubHeading color={useColorModeValue("brand.980", "brand.50")}>
            {title}
          </SubSubHeading>
          <Text
            fontSize={"sm"}
            color={useColorModeValue("brand.980", "brand.50")}
            fontWeight={400}
            lineHeight={1.4}
            letterSpacing={"wider"}
            my={6}
            noOfLines={3}
          >
            {description}
          </Text>
          <LinkOverlay href={href}></LinkOverlay>
          <Button href={href} variant={variant} mb={5}>
            {button}
          </Button>
        </Box>
      </Box>
    </LinkBox>
  );
}

BlogCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.string,
  variant: PropTypes.string,
  href: PropTypes.string,
};
