import {
  Navbar,
  Head,
  Heading,
  Box,
  InboxGrid,
  InboxDescription,
  InboxContent,
  InboxDivider,
} from "@/components/layout";
import { BackButton } from "@/components/common";
import { BASE_URL, MESSAGES_PATH } from "@/constants/api";

import axios from "axios";

const url = BASE_URL + MESSAGES_PATH;

export default function Message({ detail }) {
  return (
    <Navbar>
      <Head>Message</Head>
      <Heading>Message</Heading>
      <Box>
        <InboxGrid>
          <InboxDescription>Name</InboxDescription>
          <InboxContent>
            {detail.first_name} {detail.last_name}
          </InboxContent>
          <InboxDivider />
          <InboxDescription>Email address</InboxDescription>
          <InboxContent>{detail.email_address}</InboxContent>
          <InboxDivider />
          <InboxDescription>Subject</InboxDescription>
          <InboxContent>{detail.subject}</InboxContent>
          <InboxDivider />
          <InboxDescription>Message</InboxDescription>
          <InboxContent>{detail.message}</InboxContent>
        </InboxGrid>
      </Box>
      <BackButton href="/messages">Go back to messages</BackButton>
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
    detail = res.data.data.attributes;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { detail },
  };
}
