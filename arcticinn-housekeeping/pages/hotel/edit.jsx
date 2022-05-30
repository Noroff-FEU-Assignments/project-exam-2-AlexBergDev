import { Navbar, Head, Heading, Box } from "@/components/layout";
import { BackButton } from "@/components/common";
import { FormHotelEdit } from "@/components/forms";
import loadData from "@/lib/loadData";
import { BASE_URL, ACCOMMODATION_PATH } from "@/constants/api";

const url = BASE_URL + ACCOMMODATION_PATH;

export default function HotelEdit({ ...items }) {
  return (
    <Navbar>
      <Head>Edit hotel</Head>
      <Heading>Edit hotel</Heading>
      <Box>
        <FormHotelEdit {...items} />
      </Box>
      <BackButton href="/hotel">Go back to hotel overview</BackButton>
    </Navbar>
  );
}

export async function getStaticProps() {
  const items = await loadData(url);

  return {
    props: { items },
  };
}
