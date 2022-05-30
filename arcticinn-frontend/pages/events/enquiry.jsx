import {
  Head,
  Layout,
  Heading,
  HeadingDescription,
  Container,
} from "@/components/layout";
import { EventEnquiryForm } from "@/components/forms";
import loadData from "@/lib/loadData";
import { BASE_URL, EVENT_ENQUIRY_PATH } from "@/constants/api";

const url = BASE_URL + EVENT_ENQUIRY_PATH;

export default function Enquiry(props) {
  const data = props.items.attributes;

  return (
    <Layout>
      <Head title={data.head_title} description={data.head_description} />
      <Heading>{data.head_title}</Heading>
      <HeadingDescription>{data.head_description}</HeadingDescription>
      <Container>
        <EventEnquiryForm />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const items = await loadData(url);

  return {
    props: { items },
  };
}
