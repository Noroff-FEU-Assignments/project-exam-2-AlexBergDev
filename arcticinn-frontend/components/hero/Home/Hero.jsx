import React from "react";
import {
  Heading,
  VStack,
  Stack,
  LinkBox,
  LinkOverlay,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function HomeHero({ backgroundImage, heading, href }) {
  return (
    <LinkBox>
      <Flex
        w={"full"}
        h={useBreakpointValue({ base: "30vh", md: "40vh" })}
        backgroundImage={backgroundImage}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        transition={"opacity 0.3s ease"}
        _hover={{
          opacity: 0.9,
        }}
      >
        <VStack
          w={"full"}
          justify={"flex-end"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          py={useBreakpointValue({ base: 8, md: 10 })}
          bgGradient={"linear(to-t, blackAlpha.600, transparent)"}
        >
          <Stack spacing={6} alignItems="center">
            <Heading
              textAlign={"center"}
              color={"white"}
              as="h2"
              lineHeight={1}
              fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
              textTransform="capitalize"
            >
              <LinkOverlay href={href}>{heading}</LinkOverlay>
            </Heading>
          </Stack>
        </VStack>
      </Flex>
    </LinkBox>
  );
}

HomeHero.propTypes = {
  backgroundImage: PropTypes.string,
  heading: PropTypes.string,
  href: PropTypes.string,
};
