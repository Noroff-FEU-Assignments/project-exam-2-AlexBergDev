import { SimpleGrid } from "@chakra-ui/react";

export default function Grid({ children }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      {children}
    </SimpleGrid>
  );
}
