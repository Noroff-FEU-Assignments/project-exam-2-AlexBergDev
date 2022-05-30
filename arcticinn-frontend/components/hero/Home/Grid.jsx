import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

export default function HomeGrid(props) {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={0}>
      {props.children}
    </SimpleGrid>
  );
}
