import { Navbar, Head, Heading, Box } from "@/components/layout";
import { FormBlogAdd } from "@/components/forms";
import { BackButton } from "@/components/common";

export default function BlogAdd() {
  return (
    <Navbar>
      <Head>New post</Head>
      <Heading>New post</Heading>
      <Box>
        <FormBlogAdd />
      </Box>
      <BackButton href="/blog">Go back to blog overview</BackButton>
    </Navbar>
  );
}
