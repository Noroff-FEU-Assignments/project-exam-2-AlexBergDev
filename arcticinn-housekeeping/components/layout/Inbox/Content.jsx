import { Text, GridItem } from "@chakra-ui/react";

export default function InboxContent({ children, ...props }) {
  return (
    <Text as={GridItem} colSpan={[8, 6]} fontWeight={500} {...props}>
      {children}
    </Text>
  );
}
