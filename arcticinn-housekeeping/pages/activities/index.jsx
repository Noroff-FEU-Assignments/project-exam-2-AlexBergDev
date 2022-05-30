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
import { BASE_URL, ACTIVITIES_PATH } from "@/constants/api";

const url = BASE_URL + ACTIVITIES_PATH;

export default function Activities({ items }) {
  const count = items.length;
  return (
    <Navbar>
      <Head>Activities</Head>
      <Heading>Activities</Heading>
      <TableHead
        count={count}
        plural="activities"
        singular="activity"
        href="/activities/add"
      />
      <Box py={0} px={0}>
        <TableBody>
          {items.map((item) => {
            const activity = item.attributes;
            return (
              <TableCell
                key={item.id}
                href={`activties/${item.id}`}
                firstValue={item.id}
                secondValue={activity.title}
                thirdValue={activity.summary}
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
