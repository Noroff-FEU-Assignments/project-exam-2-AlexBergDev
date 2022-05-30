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
import { BASE_URL, ENQUIRIES_PATH } from "@/constants/api";

import axios from "axios";

const url = BASE_URL + ENQUIRIES_PATH;

export default function Enquiry({ detail }) {
  return (
    <Navbar>
      <Head>Event Enquiry</Head>
      <Heading>Event Enquiry</Heading>
      <Box>
        <InboxGrid>
          <InboxDescription>Organization / Company</InboxDescription>
          <InboxContent>{detail.organisation}</InboxContent>
          <InboxDivider />
          <InboxDescription>Name</InboxDescription>
          <InboxContent>
            {detail.first_name} {detail.last_name}
          </InboxContent>
          <InboxDivider />
          <InboxDescription>Email address</InboxDescription>
          <InboxContent>{detail.email_address}</InboxContent>
          <InboxDivider />
          <InboxDescription>Phone</InboxDescription>
          <InboxContent>{detail.phone_number}</InboxContent>
          <InboxDivider />
          <InboxDescription>Type of event</InboxDescription>
          <InboxContent>{detail.event_type}</InboxContent>
          <InboxDivider />
          <InboxDescription>Restaurant location</InboxDescription>
          <InboxContent>{detail.restaurant}</InboxContent>
          <InboxDivider />
          <InboxDescription>Cafe location</InboxDescription>
          <InboxContent>{detail.cafe}</InboxContent>
          <InboxDivider />
          <InboxDescription>Kitchen</InboxDescription>
          <InboxContent>{detail.kitchen}</InboxContent>
          <InboxDivider />
          <InboxDescription>Planning service</InboxDescription>
          <InboxContent>{detail.planning_service}</InboxContent>
          <InboxDivider />
          <InboxDescription>Number of persons</InboxDescription>
          <InboxContent>{detail.persons_amount}</InboxContent>
          <InboxDivider />
          <InboxDescription>Date of arrival</InboxDescription>
          <InboxContent>{detail.date_arrival}</InboxContent>
          <InboxDivider />
          <InboxDescription>Date of departure</InboxDescription>
          <InboxContent>{detail.date_departure}</InboxContent>
          <InboxDivider />
          <InboxDescription>Additional / Notes</InboxDescription>
          <InboxContent>{detail.event_notes}</InboxContent>
          <InboxDivider />
          <InboxDescription>Number of guest</InboxDescription>
          <InboxContent>{detail.guests_amount}</InboxContent>
          <InboxDivider />
          <InboxDescription>Hotel rooms</InboxDescription>
          <InboxContent>{detail.rooms} rooms</InboxContent>
          <InboxDivider />
          <InboxDescription>Traditional cabin</InboxDescription>
          <InboxContent>{detail.cabin}</InboxContent>
          <InboxDivider />
          <InboxDescription>More beds</InboxDescription>
          <InboxContent>{detail.beds}</InboxContent>
          <InboxDivider />
          <InboxDescription>Breakfast included</InboxDescription>
          <InboxContent>{detail.breakfast}</InboxContent>
          <InboxDivider />
          <InboxDescription>Additional / Notes</InboxDescription>
          <InboxContent>{detail.accommodation_notes}</InboxContent>
        </InboxGrid>
      </Box>
      <BackButton href="/enquiries">Go back to enquiries</BackButton>
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
