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

import { SubHeading } from "@/components/layout";
import { Button } from "@/components/common";

export default function ArticleSection({
  image,
  title,
  description,
  btnName,
  href,
}) {
  return (
    <LinkBox>
      <Box
        mb={12}
        textAlign={{ base: "center", md: "start" }}
        transition={"opacity 0.3s ease"}
        _hover={{
          opacity: 0.8,
        }}
      >
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
        <SubHeading mt={10} textAlign={{ base: "center", md: "start" }}>
          {title}
        </SubHeading>
        <Text
          my={6}
          fontSize={"md"}
          color={useColorModeValue("brand.950", "brand.50")}
          fontWeight={400}
          lineHeight={1.4}
          letterSpacing={"wider"}
        >
          {description}
        </Text>
        <LinkOverlay href={href}></LinkOverlay>
        <Button href={href} variant="primary">
          {btnName}
        </Button>
      </Box>
    </LinkBox>
  );
}

ArticleSection.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  btnName: PropTypes.string,
  href: PropTypes.string,
};
