import { SimpleGrid } from "@chakra-ui/react";

export default function GridSplit(props) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 5 }}>
      {props.children}
    </SimpleGrid>
  );
}
