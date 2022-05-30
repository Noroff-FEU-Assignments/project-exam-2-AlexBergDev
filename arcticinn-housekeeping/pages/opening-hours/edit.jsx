import { Navbar, Head, Heading, Box } from "@/components/layout";
import { BackButton } from "@/components/common";
import { FormOpeningHoursEdit } from "@/components/forms";
import loadData from "@/lib/loadData";
import { BASE_URL, OPENING_HOUR_PATH } from "@/constants/api";

const url = BASE_URL + OPENING_HOUR_PATH;

export default function OpeningHoursEdit({ ...items }) {
  return (
    <Navbar>
      <Head>Edit opening hours</Head>
      <Heading>Edit opening hours</Heading>
      <Box>
        <FormOpeningHoursEdit {...items} />
      </Box>
      <BackButton href="/opening-hours">
        Go back to opening hours overview
      </BackButton>
    </Navbar>
  );
}

export async function getStaticProps() {
  const items = await loadData(url);

  return {
    props: { items },
  };
}
