import { SimpleGrid, Box } from "@chakra-ui/react";
import { Button } from "@/components/common";

export default function BlogGrid({ children }) {
  return (
    <Box mb={{ base: 20, md: 20 }} textAlign="center">
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, md: 5 }}
        mb={{ base: 10, md: 10 }}
      >
        {children}
      </SimpleGrid>
      <Button variant="secondary" href="/blog">
        More posts
      </Button>
    </Box>
  );
}
