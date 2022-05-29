import { chakra, Box, Flex, useColorModeValue } from "@chakra-ui/react";

export default function ErrorMessage({ children }) {
  return (
    <Flex
      maxW="sm"
      w="full"
      mx="auto"
      mb={4}
      bg={useColorModeValue("red.50", "gray.800")}
      shadow="md"
      rounded={0}
      overflow="hidden"
    >
      <Box mx={-3} py={2} px={4}>
        <Box mx={3}>
          <chakra.span
            color={useColorModeValue("red.500", "red.400")}
            fontWeight="bold"
          >
            Error
          </chakra.span>
          <chakra.p
            color={useColorModeValue("gray.600", "gray.200")}
            fontSize="sm"
          >
            {children}
          </chakra.p>
        </Box>
      </Box>
    </Flex>
  );
}
