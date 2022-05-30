import { Navbar, Head, Heading, Box } from "@/components/layout";
import { FormBlogEdit } from "@/components/forms";
import { BackButton } from "@/components/common";

import axios from "axios";

import { BASE_URL, POSTS_PATH } from "@/constants/api";

const url = BASE_URL + POSTS_PATH;

export default function BlogEdit({ ...detail }) {
  return (
    <Navbar>
      <Head>Edit post</Head>
      <Heading>Edit post</Heading>
      <Box>
        <FormBlogEdit {...detail} />
      </Box>
      <BackButton href="/blog">Go back to blog overview</BackButton>
    </Navbar>
  );
}

export async function getStaticPaths() {
  try {
    const res = await axios.get(url);
    const details = res.data.data;

    const paths = details.map((detail) => ({
      params: { id: detail.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const paramsUrl = url + `/${params.id}`;

  let detail = null;

  try {
    const res = await axios.get(paramsUrl);
    detail = res.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { detail },
  };
}
