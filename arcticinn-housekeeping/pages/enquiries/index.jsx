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
import { BASE_URL, ENQUIRIES_PATH } from "@/constants/api";

const url = BASE_URL + ENQUIRIES_PATH;

export default function Enquiries({ items }) {
  return (
    <Navbar>
      <Head>Event Enquiries</Head>
      <Heading>Event Enquiries</Heading>
      <Box py={0} px={0}>
        <TableBody>
          {items.map((item) => {
            const enquiry = item.attributes;
            return (
              <TableCell
                key={item.id}
                href={`enquiries/${item.id}`}
                firstValue={`${enquiry.first_name} ${enquiry.last_name}`}
                secondValue={enquiry.event_type}
                thirdValue={enquiry.date_arrival}
              />
            );
          })}
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
