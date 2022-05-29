import { HiMenuAlt3 } from "react-icons/hi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  chakra,
  Box,
  Flex,
  Text,
  useColorModeValue,
  useColorMode,
  VisuallyHidden,
  StackDivider,
  Stack,
  HStack,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";

import React from "react";
import NextImage from "next/image";

import { Button } from "@/components/common";
import { LogoLight, LogoDark } from "@/assets/images";

const Image = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "layout",
      "objectFit",
      "src",
      "alt",
      "quality",
      "priority",
    ].includes(prop),
});

export default function Navigation() {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "brand.980");
  const themeColor = useColorModeValue("brand.500", "white");
  const mobileNav = useDisclosure();
  const themeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const logo = useColorModeValue(LogoLight, LogoDark);

  return (
    <>
      <React.Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{ base: 2, sm: 4 }}
          py={3}
          shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <HStack>
                <chakra.a
                  href="/"
                  title="Arctic Inn Home"
                  display="flex"
                  alignItems="center"
                  mr={4}
                >
                  <Box w={161} h={35} position="relative">
                    <Image
                      src={logo}
                      alt={"Arctic Inn"}
                      quality={100}
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </Box>
                  <VisuallyHidden>Arctic Inn</VisuallyHidden>
                </chakra.a>
                <HStack
                  spacing={1}
                  color={themeColor}
                  display={{ base: "none", md: "inline-flex" }}
                >
                  <Button
                    href="/hotel"
                    variant="invisible"
                    textTransform="capitalize"
                  >
                    Hotel
                  </Button>
                  <Button
                    href="/camping"
                    variant="invisible"
                    textTransform="capitalize"
                  >
                    Camping
                  </Button>
                  <Button
                    href="/events"
                    variant="invisible"
                    textTransform="capitalize"
                  >
                    Events
                  </Button>
                  <Button
                    href="/rentals"
                    variant="invisible"
                    textTransform="capitalize"
                  >
                    Rentals
                  </Button>
                </HStack>
              </HStack>
            </Flex>
            <HStack spacing={1}>
              <HStack spacing={1} mr={1} color="brand.500">
                <Button href="" variant="primary" size="sm" mr={2}>
                  Book
                </Button>
              </HStack>
              <Box>
                <IconButton
                  aria-label="Open menu"
                  fontSize="26px"
                  color={themeColor}
                  variant="invisible"
                  icon={<HiMenuAlt3 />}
                  onClick={mobileNav.onOpen}
                />

                <Stack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  p={3}
                  pb={12}
                  shadow="xl"
                  bg={useColorModeValue("white", "brand.980")}
                  color={themeColor}
                  zIndex="popover"
                  borderBottomWidth={2}
                  borderBottomColor={useColorModeValue(
                    "brand.200",
                    "brand.600"
                  )}
                >
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    pt={0}
                    pb={6}
                  >
                    <IconButton
                      ml={1}
                      onClick={toggleColorMode}
                      variant="invisible"
                      aria-label="Toggle theme"
                      icon={themeIcon}
                    />
                    <CloseButton
                      aria-label="Close menu"
                      onClick={mobileNav.onClose}
                    />
                  </Flex>
                  <VStack
                    divider={
                      <StackDivider
                        borderColor={useColorModeValue(
                          "brand.200",
                          "brand.900"
                        )}
                      />
                    }
                    alignItems="flex-start"
                    spacing={3}
                  >
                    <Button
                      href="/hotel"
                      variant="invisible"
                      textTransform="capitalize"
                    >
                      <Flex direction="column">
                        <Text>Suites & cabins</Text>

                        <Text
                          fontSize={"sm"}
                          color={useColorModeValue("brand.400", "brand.300")}
                          fontWeight={300}
                          lineHeight={1.4}
                          pt={1}
                          textTransform="none"
                        >
                          Discover our different rooms and suites
                        </Text>
                      </Flex>
                    </Button>
                    <Button
                      href="/camping"
                      variant="invisible"
                      textTransform="capitalize"
                    >
                      <Flex direction="column">
                        <Text>Camping</Text>

                        <Text
                          fontSize={"sm"}
                          color={useColorModeValue("brand.400", "brand.300")}
                          fontWeight={300}
                          lineHeight={1.4}
                          pt={1}
                          textTransform="none"
                        >
                          Overview of camping and pricing
                        </Text>
                      </Flex>
                    </Button>
                    <Button
                      href="/events"
                      variant="invisible"
                      textTransform="capitalize"
                    >
                      <Flex direction="column">
                        <Text>Events</Text>

                        <Text
                          fontSize={"sm"}
                          color={useColorModeValue("brand.400", "brand.300")}
                          fontWeight={300}
                          lineHeight={1.4}
                          pt={1}
                          textTransform="none"
                        >
                          Book the Løkta location for events
                        </Text>
                      </Flex>
                    </Button>
                    <Button
                      href="/rentals"
                      variant="invisible"
                      textTransform="capitalize"
                    >
                      <Flex direction="column">
                        <Text>Rentals</Text>

                        <Text
                          fontSize={"sm"}
                          color={useColorModeValue("brand.400", "brand.300")}
                          fontWeight={300}
                          lineHeight={1.4}
                          pt={1}
                          textTransform="none"
                        >
                          Boats, kayaks, canoes, etc.
                        </Text>
                      </Flex>
                    </Button>
                    <Button
                      href="/activities"
                      variant="invisible"
                      textTransform="capitalize"
                    >
                      <Flex direction="column">
                        <Text>Activities</Text>

                        <Text
                          fontSize={"sm"}
                          color={useColorModeValue("brand.400", "brand.300")}
                          fontWeight={300}
                          lineHeight={1.4}
                          pt={1}
                          textTransform="none"
                        >
                          See what is nearby
                        </Text>
                      </Flex>
                    </Button>
                    <Button
                      href="/blog"
                      variant="invisible"
                      textTransform="capitalize"
                    >
                      <Flex direction="column">
                        <Text>Blog</Text>

                        <Text
                          fontSize={"sm"}
                          color={useColorModeValue("brand.400", "brand.300")}
                          fontWeight={300}
                          lineHeight={1.4}
                          pt={1}
                          textTransform="none"
                        >
                          Read about the most recent events in Gratangen
                        </Text>
                      </Flex>
                    </Button>
                    <Button
                      href="/opening-hours"
                      variant="invisible"
                      textTransform="capitalize"
                    >
                      <Flex direction="column">
                        <Text>Opening hours</Text>

                        <Text
                          fontSize={"sm"}
                          color={useColorModeValue("brand.400", "brand.300")}
                          fontWeight={300}
                          lineHeight={1.4}
                          pt={1}
                          textTransform="none"
                        >
                          Breakfast buffet, restaurant and room service
                        </Text>
                      </Flex>
                    </Button>
                    <Button
                      href="/contact"
                      variant="invisible"
                      textTransform="capitalize"
                    >
                      <Flex direction="column">
                        <Text>Contact</Text>

                        <Text
                          fontSize={"sm"}
                          color={useColorModeValue("brand.400", "brand.300")}
                          fontWeight={300}
                          pt={1}
                          textTransform="none"
                        >
                          Arctic Inn contact information
                        </Text>
                      </Flex>
                    </Button>
                  </VStack>
                </Stack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    </>
  );
}
