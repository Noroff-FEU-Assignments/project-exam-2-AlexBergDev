import { Navbar, Head, Heading, Box } from "@/components/layout";
import { FormRentalsEdit } from "@/components/forms";
import { BackButton } from "@/components/common";

import axios from "axios";

import { BASE_URL, RENTALS_PATH } from "@/constants/api";

const url = BASE_URL + RENTALS_PATH;

export default function BlogEdit({ ...detail }) {
  return (
    <Navbar>
      <Head>Edit post</Head>
      <Heading>Edit post</Heading>
      <Box>
        <FormRentalsEdit {...detail} />
      </Box>
      <BackButton href="/rentals">Go back to rentals overview</BackButton>
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
