import { Navbar, Head, Heading, Box } from "@/components/layout";
import { FormActivitiesEdit } from "@/components/forms";
import { BackButton } from "@/components/common";
import { BASE_URL, ACTIVITIES_PATH } from "@/constants/api";

import axios from "axios";

const url = BASE_URL + ACTIVITIES_PATH;

export default function ActivitiesEdit({ ...detail }) {
  return (
    <Navbar>
      <Head>Edit activity</Head>
      <Heading>Edit activity</Heading>
      <Box>
        <FormActivitiesEdit {...detail} />
      </Box>
      <BackButton href="/activities">Go back to activities overview</BackButton>
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
