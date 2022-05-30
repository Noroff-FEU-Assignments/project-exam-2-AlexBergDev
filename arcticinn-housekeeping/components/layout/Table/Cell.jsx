import {
  useColorModeValue,
  Tr,
  Td,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default function TableCell({
  href,
  firstValue,
  secondValue,
  thirdValue,
}) {
  return (
    <NextLink href={href} passHref>
      <Tr
        transition=".15s ease"
        _hover={{
          bg: useColorModeValue("blue.50", "teal.900"),
          cursor: "pointer",
        }}
      >
        <Td
          fontWeight={600}
          maxW={40}
          overflowX="hidden"
          display={{ base: "table-cell", md: "table-cell" }}
          isTruncated
          borderBottomWidth={2}
          borderBottomColor={useColorModeValue("brand.50", "grey.600")}
        >
          {firstValue}
        </Td>
        <Td
          fontWeight={600}
          color={useColorModeValue("brand.500", "brand.600")}
          display={{ base: "table-cell", md: "table-cell" }}
          borderBottomWidth={2}
          borderBottomColor={useColorModeValue("brand.50", "grey.600")}
        >
          {secondValue}
        </Td>
        <Td
          overflowX="hidden"
          isTruncated
          fontSize="sm"
          color={useColorModeValue("brand.400", "brand.300")}
          fontWeight={500}
          display={{ base: "none", md: "table-cell" }}
          borderBottomWidth={2}
          borderBottomColor={useColorModeValue("brand.50", "grey.600")}
        >
          {thirdValue}
        </Td>
      </Tr>
    </NextLink>
  );
}
