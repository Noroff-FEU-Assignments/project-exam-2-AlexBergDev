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

import { VStack, Text } from "@chakra-ui/react";
import { HiArrowSmLeft } from "react-icons/hi";

export default function PageNotFound() {
  const [auth] = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push("/");
    }
  }, [auth]);

  return (
    <Navbar>
      <Head>Page not found</Head>
      <Heading>Page not found</Heading>
      <Grid>
        <Box>
          <SubHeading>Error Code 404</SubHeading>
          <VStack spacing={3} alignItems="start">
            <Text>
              The page you are trying to find does not exist. Go back to the
              dashboard and find out what where you can navigate to.
            </Text>
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
