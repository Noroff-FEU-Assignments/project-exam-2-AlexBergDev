import {
  chakra,
  Box,
  Container,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  Center,
  Tag,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import NextImage from "next/image";
import Link from "next/link";

import { LogoLight, LogoDark } from "@/assets/images";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"600"} fontSize={"lg"} mb={3} mt={{ base: 4, md: 0 }}>
      {children}
    </Text>
  );
};

function ChakraNextLink({ href, children, ...props }) {
  return (
    <Link href={href} passHref>
      <ChakraLink fontSize="md" fontWeight={400} {...props}>
        {children}
      </ChakraLink>
    </Link>
  );
}

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
    ].includes(prop),
});

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("brand.50", "brand.980")}
      color={useColorModeValue("brand.500", "white")}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("brand.500", "brand.600"),
        color: useColorModeValue("white", "black"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const logo = useColorModeValue(LogoLight, LogoDark);
  const themeColor = useColorModeValue("brand.500", "white");

  return (
    <>
      <Box
        bg={useColorModeValue("white", "black")}
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.50", "gray.900")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          pt={10}
          spacing={4}
          align={{ base: "center", md: "flex-start" }}
        >
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
      <Box bg={useColorModeValue("white", "black")} color={themeColor}>
        <Container as={Stack} maxW={"6xl"} pt={8} pb={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={{ base: "center", md: "flex-start" }}>
              <ListHeader>Hotel</ListHeader>
              <ChakraNextLink href={"/hotel"}>Accommodations</ChakraNextLink>
              <ChakraNextLink href={"/hotel"}>Hotel room</ChakraNextLink>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <ChakraNextLink href={"/hotel"}>Cabin</ChakraNextLink>
                <Tag
                  size={"sm"}
                  rounded={"none"}
                  bg={useColorModeValue("brand.500", "brand.600")}
                  ml={2}
                  color={useColorModeValue("white", "black")}
                >
                  New
                </Tag>
              </Stack>
              <ChakraNextLink href={"/opening-hours"}>Breakfast</ChakraNextLink>
            </Stack>
            <Stack align={{ base: "center", md: "flex-start" }}>
              <ListHeader>Camping</ListHeader>
              <ChakraNextLink href={"/camping"}>Overview</ChakraNextLink>
              <ChakraNextLink href={"/camping"}>Services</ChakraNextLink>
              <ChakraNextLink href={"/camping"}>Parking</ChakraNextLink>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <ChakraNextLink href={"/camping"}>Lounge</ChakraNextLink>
                <Tag
                  size={"sm"}
                  rounded={"none"}
                  bg={useColorModeValue("brand.500", "brand.600")}
                  ml={2}
                  color={useColorModeValue("white", "black")}
                >
                  New
                </Tag>
              </Stack>
              <ChakraNextLink href={"/camping"}>Gallery</ChakraNextLink>
            </Stack>
            <Stack align={{ base: "center", md: "flex-start" }}>
              <ListHeader>Events</ListHeader>
              <ChakraNextLink href={"/events"}>Overview</ChakraNextLink>
              <ChakraNextLink href={"/events"}>Restaurant</ChakraNextLink>
              <ChakraNextLink href={"/events"}>Cafe</ChakraNextLink>
              <ChakraNextLink href={"/events"}>Planning</ChakraNextLink>
              <ChakraNextLink href={"/events/enquiry"}>
                Event query
              </ChakraNextLink>
            </Stack>
            <Stack align={{ base: "center", md: "flex-start" }}>
              <ListHeader>General</ListHeader>
              <ChakraNextLink href={"/about"}>About</ChakraNextLink>
              <ChakraNextLink href={"/opening-hours"}>
                Opening hours
              </ChakraNextLink>
              <ChakraNextLink href={"/privacy"}>Privacy Policy</ChakraNextLink>

              <ChakraNextLink href={"/contact"}>Contact</ChakraNextLink>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10} bg={useColorModeValue("brand.50", "brand.980")}>
          <Center>
            <chakra.a
              href="/"
              title="Arctic Inn Home"
              display="flex"
              alignItems="center"
              textAlign={"center"}
            >
              <Box w={162} h={35} position="relative">
                <Image
                  src={logo}
                  alt={"Arctic Inn"}
                  quality={100}
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <VisuallyHidden>Arctic Inn</VisuallyHidden>
            </chakra.a>
          </Center>
          <Text pt={6} fontSize={"xs"} textAlign={"center"}>
            © 2022 Copyright Arctic Inn. All rights reserved.
          </Text>
        </Box>
      </Box>
    </>
  );
}
