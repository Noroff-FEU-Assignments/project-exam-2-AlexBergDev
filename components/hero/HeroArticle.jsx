import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

import { Container } from "@/components/layout";

export default function HeroArticle({ heading, backgroundImage, imageSource }) {
  return (
    <>
      <Flex
        w={"full"}
        h={useBreakpointValue({ base: "50vh", md: "60vh" })}
        backgroundImage={backgroundImage}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"flex-end"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          py={useBreakpointValue({ base: 8, md: 10 })}
          bgGradient={"linear(to-t, blackAlpha.700, transparent)"}
        >
          <Stack spacing={6} alignItems="center">
            <Heading
              textAlign={"center"}
              color={"white"}
              as="h1"
              lineHeight={1}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              textTransform="capitalize"
            >
              {heading}
            </Heading>
          </Stack>
        </VStack>
      </Flex>
      <Container>
        <Text
          fontSize="xs"
          mt={2}
          fontWeight={600}
          color={useColorModeValue("brand.400", "brand.600")}
        >
          {imageSource}
        </Text>
      </Container>
    </>
  );
}

HeroArticle.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.string,
};
