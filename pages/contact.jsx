import {
  Head,
  Layout,
  Heading,
  HeadingDescription,
  Container,
} from "@/components/layout";
import { ContactForm } from "@/components/forms";
import loadData from "@/lib/loadData";
import { BASE_URL, CONTACT_PATH } from "@/constants/api";

const url = BASE_URL + CONTACT_PATH;

export default function Contact(props) {
  const data = props.items.attributes;

  return (
    <Layout>
      <Head title={data.head_title} description={data.head_description} />
      <Heading>{data.head_title}</Heading>
      <HeadingDescription>{data.head_description}</HeadingDescription>
      <Container>
        <ContactForm />
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
