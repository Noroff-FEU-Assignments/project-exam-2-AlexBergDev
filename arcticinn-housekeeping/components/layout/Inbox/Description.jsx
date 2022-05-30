import { Text, GridItem, useColorModeValue } from "@chakra-ui/react";

export default function InboxDescription({ children, ...props }) {
  return (
    <Text
      as={GridItem}
      colSpan={[8, 2]}
      fontWeight={600}
      fontSize="sm"
      color={useColorModeValue("brand.400", "brand.300")}
      {...props}
    >
      {children}
    </Text>
  );
}
