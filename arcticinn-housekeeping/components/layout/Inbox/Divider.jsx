import { Divider, GridItem, useColorModeValue } from "@chakra-ui/react";

export default function InboxDivider() {
  return (
    <Divider
      as={GridItem}
      colSpan={[8]}
      borderBottomWidth={2}
      borderBottomColor={useColorModeValue("brand.50", "grey.600")}
    />
  );
}
