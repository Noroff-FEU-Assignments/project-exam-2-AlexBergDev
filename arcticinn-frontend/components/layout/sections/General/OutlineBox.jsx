import {
  chakra,
  Box,
  SimpleGrid,
  List,
  ListItem,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function OutlineBox() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} mb={20}>
      <Box
        borderWidth="2px"
        borderColor={useColorModeValue("brand.300", "brand.50")}
        px={useBreakpointValue({ base: 10, md: 20 })}
        py={useBreakpointValue({ base: 8, md: 10 })}
      >
        <List spacing={3}>
          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight={600}>
            Beds
          </chakra.h3>
          <ListItem>1 King size bed (180cm wide)</ListItem>
          <ListItem>1 Sofa bed (150cm wide)</ListItem>
        </List>
      </Box>
      <Box
        borderWidth="2px"
        borderColor={useColorModeValue("brand.300", "brand.50")}
        px={useBreakpointValue({ base: 10, md: 20 })}
        py={useBreakpointValue({ base: 8, md: 10 })}
      >
        <List spacing={3}>
          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight={600}>
            Living area
          </chakra.h3>
          <ListItem>Seating area</ListItem>
          <ListItem>Standing lamp</ListItem>
        </List>
      </Box>
      <Box
        borderWidth="2px"
        borderColor={useColorModeValue("brand.300", "brand.50")}
        px={useBreakpointValue({ base: 10, md: 20 })}
        py={useBreakpointValue({ base: 8, md: 10 })}
      >
        <List spacing={3}>
          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight={600}>
            Bathroom
          </chakra.h3>
          <ListItem>Private bathroom</ListItem>
          <ListItem>Shower</ListItem>
          <ListItem>Toilet</ListItem>
          <ListItem>Bath towels</ListItem>
          <ListItem>Hand towels</ListItem>
          <ListItem>Hairdryer</ListItem>
          <ListItem>Body & hair soap</ListItem>
        </List>
      </Box>
      <Box
        borderWidth="2px"
        borderColor={useColorModeValue("brand.300", "brand.50")}
        px={useBreakpointValue({ base: 10, md: 20 })}
        py={useBreakpointValue({ base: 8, md: 10 })}
      >
        <List spacing={3}>
          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight={600}>
            General
          </chakra.h3>
          <ListItem>Fjord view (Sea view)</ListItem>
          <ListItem>No smoking allowed</ListItem>
          <ListItem>Floor heating</ListItem>
          <ListItem>Wine glasses</ListItem>
          <ListItem>Minibar</ListItem>
          <ListItem>Private terrace</ListItem>
        </List>
      </Box>
      <Box
        borderWidth="2px"
        borderColor={useColorModeValue("brand.300", "brand.50")}
        px={useBreakpointValue({ base: 10, md: 20 })}
        py={useBreakpointValue({ base: 8, md: 10 })}
      >
        <List spacing={3}>
          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight={600}>
            Services
          </chakra.h3>
          <ListItem>Room service</ListItem>
          <ListItem>Ironing available</ListItem>
          <ListItem>Washing service available</ListItem>
          <ListItem>Daily housekeeping</ListItem>
        </List>
      </Box>
      <Box
        borderWidth="2px"
        borderColor={useColorModeValue("brand.300", "brand.50")}
        px={useBreakpointValue({ base: 10, md: 20 })}
        py={useBreakpointValue({ base: 8, md: 10 })}
      >
        <List spacing={3}>
          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight={600}>
            Reception
          </chakra.h3>
          <ListItem>Check-in: 14:00 - 23:00</ListItem>
          <ListItem>Check-out: by 11:00</ListItem>
        </List>
      </Box>
    </SimpleGrid>
  );
}
