import {
  chakra,
  Box,
  Flex,
  Container,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Unauthorized() {
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Flex
            maxW="sm"
            w="full"
            mx="auto"
            mb={4}
            bg={useColorModeValue("red.50", "gray.800")}
            shadow="md"
            rounded="lg"
            overflow="hidden"
          >
            <Box mx={-3} py={2} px={4}>
              <Box mx={3}>
                <chakra.span
                  color={useColorModeValue("red.500", "red.400")}
                  fontWeight="bold"
                >
                  Access denied
                </chakra.span>
                <chakra.p
                  color={useColorModeValue("gray.600", "gray.200")}
                  fontSize="sm"
                >
                  Access is only possible for logged in users.
                </chakra.p>
              </Box>
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
}
