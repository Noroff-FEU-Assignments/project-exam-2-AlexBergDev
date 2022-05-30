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
import { BASE_URL, OPENING_HOUR_PATH } from "@/constants/api";

const url = BASE_URL + OPENING_HOUR_PATH;

export default function OpeningHours({ items }) {
  const data = items.attributes;
  return (
    <Navbar>
      <Head>Opening hours</Head>
      <Heading>Opening hours</Heading>
      <Box py={0} px={0}>
        <TableBody>
          <TableCell
            href="/opening-hours/edit"
            firstValue={data.reception_name}
            secondValue={data.reception_time}
            thirdValue={data.reception_description}
          />
          <TableCell
            href="/opening-hours/edit"
            firstValue={data.breakfast_name}
            secondValue={data.breakfast_time}
            thirdValue={data.breakfast_description}
          />
          <TableCell
            href="/opening-hours/edit"
            firstValue={data.dinner_name}
            secondValue={data.dinner_time}
            thirdValue={data.dinner_description}
          />
          <TableCell
            href="/opening-hours/edit"
            firstValue={data.room_service_name}
            secondValue={data.room_service_time}
            thirdValue={data.room_service_description}
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
