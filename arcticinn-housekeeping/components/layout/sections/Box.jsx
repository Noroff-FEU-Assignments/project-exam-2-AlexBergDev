import { Box, useColorModeValue } from "@chakra-ui/react";

export default function RenderBox({ children, ...props }) {
  return (
    <Box
      backgroundColor={useColorModeValue("white", "brand.980")}
      rounded={5}
      p={8}
      px={{ base: 5, md: 8 }}
      shadow="md"
      {...props}
    >
      {children}
    </Box>
  );
}
