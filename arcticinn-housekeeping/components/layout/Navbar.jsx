import {
  chakra,
  Box,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Button,
  Spacer,
  Text,
  useColorModeValue,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  HiHome,
  HiCog,
  HiGlobe,
  HiMenuAlt2,
  HiMail,
  HiDocument,
  HiArchive,
  HiClock,
  HiLightningBolt,
  HiKey,
  HiChevronRight,
  HiNewspaper,
  HiPlus,
  HiLogout,
} from "react-icons/hi";

import NextImage from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import AuthContext from "@/context/AuthContext";
import { LogoLight, LogoDark } from "@/assets/images";
import { Container } from ".";

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

export default function Navbar({ children }) {
  const { toggleColorMode } = useColorMode();
  const sidebar = useDisclosure();
  const blog = useDisclosure();
  const activities = useDisclosure();
  const rentals = useDisclosure();
  const color = useColorModeValue("gray.600", "gray.300");
  const themeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const logo = useColorModeValue(LogoLight, LogoDark);

  const [auth, setAuth] = useContext(AuthContext);

  const router = useRouter();

  const onLogout = (e) => {
    e.preventDefault();
    setAuth(null);
    router.push("/login");
  };

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color={useColorModeValue("brand.980", "brand.50")}
        _hover={{
          bg: useColorModeValue("brand.200", "brand.900"),
          color: useColorModeValue("brand.500", "white"),
        }}
        role="group"
        fontWeight="600"
        transition=".22s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "brand.980")}
      shadow="md"
      w="60"
      {...props}
    >
      <Flex px="6" py="5" align="center">
        <chakra.a
          href="/"
          title="Arctic Inn"
          display={{ base: "flex" }}
          alignItems="center"
          mr={4}
        >
          <Box w={134} h={29} position="relative">
            <Image
              src={logo}
              alt={"Arctic Inn"}
              quality={100}
              layout="fill"
              objectFit="cover"
              priority
            />
          </Box>
        </chakra.a>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <Link href="/dashboard">
          <NavItem icon={HiGlobe}>Dashboard</NavItem>
        </Link>
        <Link href="/hotel">
          <NavItem icon={HiHome}>Hotel</NavItem>
        </Link>
        <Link href="/messages">
          <NavItem icon={HiMail}>Messages</NavItem>
        </Link>
        <Link href="/enquiries">
          <NavItem icon={HiArchive}>Enquiries</NavItem>
        </Link>
        <NavItem icon={HiNewspaper} onClick={blog.onToggle}>
          Blog
          <Icon
            as={HiChevronRight}
            ml="auto"
            transform={blog.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={blog.isOpen}>
          <Link href="/blog">
            <NavItem icon={HiDocument} pl="12" py="2">
              Overview
            </NavItem>
          </Link>
          <Link href="/blog/add">
            <NavItem icon={HiPlus} pl="12" py="2">
              New post
            </NavItem>
          </Link>
        </Collapse>
        <NavItem icon={HiLightningBolt} onClick={activities.onToggle}>
          Activities
          <Icon
            as={HiChevronRight}
            ml="auto"
            transform={activities.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={activities.isOpen}>
          <Link href="/activities">
            <NavItem icon={HiDocument} pl="12" py="2">
              Overview
            </NavItem>
          </Link>
          <Link href="/activities/add">
            <NavItem icon={HiPlus} pl="12" py="2">
              New activity
            </NavItem>
          </Link>
        </Collapse>
        <NavItem icon={HiKey} onClick={rentals.onToggle}>
          Rentals
          <Icon
            as={HiChevronRight}
            ml="auto"
            transform={rentals.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={rentals.isOpen}>
          <Link href="/rentals">
            <NavItem icon={HiDocument} pl="12" py="2">
              Overview
            </NavItem>
          </Link>
          <Link href="/rentals/add">
            <NavItem icon={HiPlus} pl="12" py="2">
              New rental
            </NavItem>
          </Link>
        </Collapse>
        <Link href="/opening-hours">
          <NavItem icon={HiClock}>Opening hours</NavItem>
        </Link>
        <Link href="/settings">
          <NavItem icon={HiCog}>Settings</NavItem>
        </Link>
      </Flex>
    </Box>
  );
  return (
    <Box
      as="section"
      bg={useColorModeValue("brand.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={useColorModeValue("white", "brand.980")}
          shadow="md"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            fontSize="26px"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<HiMenuAlt2 />}
            variant="invisible"
          />
          <Spacer />

          <Flex align="center" gap={5}>
            <Button
              bg="red"
              color="white"
              rounded={5}
              shadow="md"
              rightIcon={<HiLogout />}
              onClick={onLogout}
            >
              Logout
            </Button>
          </Flex>
        </Flex>

        <Box as="main" p="4">
          <Container>{children}</Container>
        </Box>
      </Box>
    </Box>
  );
}
