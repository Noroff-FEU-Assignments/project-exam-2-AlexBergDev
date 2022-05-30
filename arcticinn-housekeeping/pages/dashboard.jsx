import {
  Navbar,
  Head,
  Heading,
  SubHeading,
  Grid,
  Box,
} from "@/components/layout";
import { Button } from "@/components/common";
import AuthContext from "@/context/AuthContext";

import { useEffect } from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import { VStack } from "@chakra-ui/react";
import { HiChevronDoubleRight, HiPlus } from "react-icons/hi";

export default function Dashboard() {
  const [auth] = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push("/");
    }
  }, [auth]);

  return (
    <Navbar>
      <Head>Dashboard</Head>
      <Heading>Dashboard</Heading>
      <Grid>
        <Box>
          <SubHeading>Hotel</SubHeading>
          <Button
            href="/hotel"
            px={0}
            variant="invisible"
            leftIcon={<HiChevronDoubleRight />}
          >
            Edit accommodations
          </Button>
        </Box>
        <Box>
          <SubHeading>Messages</SubHeading>
          <Button
            href="/messages"
            px={0}
            variant="invisible"
            leftIcon={<HiChevronDoubleRight />}
          >
            Go to messages
          </Button>
        </Box>
        <Box>
          <SubHeading>Enquiries</SubHeading>
          <Button
            href="/enquiries"
            px={0}
            variant="invisible"
            leftIcon={<HiChevronDoubleRight />}
          >
            Go to enquiries
          </Button>
        </Box>
        <Box>
          <SubHeading>Blog</SubHeading>
          <VStack spacing={0} alignItems="start">
            <Button
              href="/blog"
              px={0}
              variant="invisible"
              leftIcon={<HiChevronDoubleRight />}
            >
              Overview
            </Button>
            <Button
              href="/blog/add"
              px={0}
              variant="invisible"
              leftIcon={<HiPlus />}
            >
              New post
            </Button>
          </VStack>
        </Box>
        <Box>
          <SubHeading>Activities</SubHeading>
          <VStack spacing={0} alignItems="start">
            <Button
              href="/activities"
              px={0}
              variant="invisible"
              leftIcon={<HiChevronDoubleRight />}
            >
              Overview
            </Button>
            <Button
              href="/activities/add"
              px={0}
              variant="invisible"
              leftIcon={<HiPlus />}
            >
              New post
            </Button>
          </VStack>
        </Box>
        <Box>
          <SubHeading>Rentals</SubHeading>
          <VStack spacing={0} alignItems="start">
            <Button
              href="/rentals"
              px={0}
              variant="invisible"
              leftIcon={<HiChevronDoubleRight />}
            >
              Overview
            </Button>
            <Button
              href="/rentals/add"
              px={0}
              variant="invisible"
              leftIcon={<HiPlus />}
            >
              New post
            </Button>
          </VStack>
        </Box>
        <Box>
          <SubHeading>Opening hours</SubHeading>
          <Button
            href="/opening-hours"
            px={0}
            variant="invisible"
            leftIcon={<HiChevronDoubleRight />}
          >
            Edit opening hours
          </Button>
        </Box>
        <Box>
          <SubHeading>Settings</SubHeading>
          <Button
            href="/settings"
            px={0}
            variant="invisible"
            leftIcon={<HiChevronDoubleRight />}
          >
            Change appearance
          </Button>
        </Box>
      </Grid>
    </Navbar>
  );
}
