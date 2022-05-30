import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

import { Button } from "@/components/common";

export default function Banner({
  heading,
  description,
  backgroundImage,
  href,
  btnName,
}) {
  return (
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
          <Button href={href} fontSize="md" variant="secondary">
            {btnName}
          </Button>
          <Heading
            textAlign={"center"}
            color={"white"}
            as="h1"
            lineHeight={1}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            textTransform="uppercase"
          >
            {heading}
          </Heading>
          <Text
            textAlign={"center"}
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            letterSpacing={"wider"}
            fontSize={useBreakpointValue({ base: "sm", md: "md" })}
          >
            {description}
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}

Banner.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  backgroundImage: PropTypes.string,
};
