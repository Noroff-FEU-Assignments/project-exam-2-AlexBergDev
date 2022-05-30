import { Container, Stack, Box, useColorModeValue } from "@chakra-ui/react";

import { Head, Heading } from "@/components/layout";
import { FormLogin } from "@/components/forms";
import AuthContext from "@/context/AuthContext";

import { useEffect } from "react";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [auth] = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (auth) {
      router.push("/dashboard");
    }
  }, [auth]);

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Head>Sign in</Head>
            <Heading>Sign in</Heading>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          bg={{ base: "none", sm: useColorModeValue("teal.50", "gray.700") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <FormLogin />
        </Box>
      </Stack>
    </Container>
  );
}
