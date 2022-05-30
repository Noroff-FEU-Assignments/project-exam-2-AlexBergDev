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
import { BASE_URL, MESSAGES_PATH } from "@/constants/api";

const url = BASE_URL + MESSAGES_PATH;

export default function Messages({ items }) {
  return (
    <Navbar>
      <Head>Messages</Head>
      <Heading>Messages</Heading>
      <Box py={0} px={0}>
        <TableBody>
          {items.map((item) => {
            const message = item.attributes;
            return (
              <TableCell
                key={item.id}
                href={`messages/${item.id}`}
                firstValue={`${message.first_name} ${message.last_name}`}
                secondValue={message.subject}
                thirdValue={message.message}
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
