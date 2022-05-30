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
import { BASE_URL, POSTS_PATH } from "@/constants/api";

const url = BASE_URL + POSTS_PATH;

export default function Blog({ items }) {
  const count = items.length;
  return (
    <Navbar>
      <Head>Blog</Head>
      <Heading>Blog</Heading>
      <TableHead
        count={count}
        plural="posts"
        singular="post"
        href="/blog/add"
      />
      <Box py={0} px={0}>
        <TableBody>
          {items.map((item) => {
            const post = item.attributes;
            return (
              <TableCell
                key={item.id}
                href={`blog/${item.id}`}
                firstValue={item.id}
                secondValue={post.title}
                thirdValue={post.summary}
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
