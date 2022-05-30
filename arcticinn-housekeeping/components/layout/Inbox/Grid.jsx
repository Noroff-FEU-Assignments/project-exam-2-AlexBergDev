import { SimpleGrid } from "@chakra-ui/react";

export default function InboxGrid({ children }) {
  return (
    <SimpleGrid columns={8} spacing={4}>
      {children}
    </SimpleGrid>
  );
}
