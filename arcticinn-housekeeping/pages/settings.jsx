import {
  Navbar,
  Head,
  Heading,
  SubHeading,
  Grid,
  Box,
} from "@/components/layout";
import { Button as NextButton } from "@/components/common";
import AuthContext from "@/context/AuthContext";

import { useEffect } from "react";
import { useContext } from "react";
import { useRouter } from "next/router";

import {
  VStack,
  Text,
  colorMode,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HiArrowSmLeft } from "react-icons/hi";

export default function Settings() {
  const { colorMode, toggleColorMode } = useColorMode();
  const themeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const [auth] = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push("/");
    }
  }, [auth]);

  return (
    <Navbar>
      <Head>Settings</Head>
      <Heading>Settings</Heading>
      <Grid>
        <Box>
          <SubHeading>Theme</SubHeading>
          <VStack spacing={3} alignItems="start">
            <Text>Select between dark and light mode.</Text>
            <Button
              variant="solid"
              leftIcon={themeIcon}
              aria-label="Toggle theme"
              onClick={toggleColorMode}
              rounded={5}
            >
              Switch to {colorMode === "light" ? "dark" : "light"}
            </Button>
          </VStack>
        </Box>
      </Grid>
      <NextButton
        href="/dashboard"
        my={3}
        px={0}
        variant="invisible"
        leftIcon={<HiArrowSmLeft />}
      >
        Go back to dashboard
      </NextButton>
    </Navbar>
  );
}
