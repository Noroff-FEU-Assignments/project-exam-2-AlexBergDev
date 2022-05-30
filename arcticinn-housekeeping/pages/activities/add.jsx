import { Navbar, Head, Heading, Box } from "@/components/layout";
import { FormActivitiesAdd } from "@/components/forms";
import { BackButton } from "@/components/common";

export default function ActivitiesAdd() {
  return (
    <Navbar>
      <Head>New activity</Head>
      <Heading>New activity</Heading>
      <Box>
        <FormActivitiesAdd />
      </Box>
      <BackButton href="/activities">Go back to activities overview</BackButton>
    </Navbar>
  );
}
