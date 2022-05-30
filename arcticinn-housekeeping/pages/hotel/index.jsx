import {
  Navbar,
  Head,
  Heading,
  Box,
  TableBody,
  TableCell,
} from "@/components/layout";
import { BackButton } from "@/components/common";

import loadData from "@/lib/loadData";
import { BASE_URL, ACCOMMODATION_PATH } from "@/constants/api";

const url = BASE_URL + ACCOMMODATION_PATH;

export default function Hotel({ items }) {
  const data = items.attributes;
  return (
    <Navbar>
      <Head>Hotel</Head>
      <Heading>Hotel</Heading>
      <Box py={0} px={0}>
        <TableBody>
          <TableCell
            href="/hotel/edit"
            firstValue={data.hotel_name}
            secondValue={`${data.hotel_currency} ${data.hotel_price}`}
            thirdValue={data.hotel_description}
          />
          <TableCell
            href="/hotel/edit"
            firstValue={data.cabin_name}
            secondValue={data.cabin_currency}
            thirdValue={data.cabin_description}
          />
        </TableBody>
      </Box>
      <BackButton href="/dashboard">Go back to dashboard</BackButton>
    </Navbar>
  );
}

export async function getStaticProps() {
  const items = await loadData(url);

  return {
    props: { items },
  };
}
