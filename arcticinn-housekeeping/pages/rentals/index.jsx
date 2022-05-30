import {
  Navbar,
  Head,
  Heading,
  Box,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/layout";
import { BackButton } from "@/components/common";
import loadData from "@/lib/loadData";
import { BASE_URL, RENTALS_PATH } from "@/constants/api";

const url = BASE_URL + RENTALS_PATH;

export default function Rentals({ items }) {
  const count = items.length;
  return (
    <Navbar>
      <Head>Rentals</Head>
      <Heading>Rentals</Heading>
      <TableHead
        count={count}
        plural="rentals"
        singular="rental"
        href="rentals/add"
      />
      <Box py={0} px={0}>
        <TableBody>
          {items.map((item) => {
            const rental = item.attributes;
            return (
              <TableCell
                key={item.id}
                href={`rentals/${item.id}`}
                firstValue={rental.name}
                secondValue={`${rental.currency} ${rental.price}`}
                thirdValue={rental.description}
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
