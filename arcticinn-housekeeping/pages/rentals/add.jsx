import { Navbar, Head, Heading, Box } from "@/components/layout";
import { FormRentalsAdd } from "@/components/forms";
import { BackButton } from "@/components/common";

export default function RentalsAdd() {
  return (
    <Navbar>
      <Head>New rental</Head>
      <Heading>New rental</Heading>
      <Box>
        <FormRentalsAdd />
      </Box>
      <BackButton href="/rentals">Go back to rentals overview</BackButton>
    </Navbar>
  );
}
