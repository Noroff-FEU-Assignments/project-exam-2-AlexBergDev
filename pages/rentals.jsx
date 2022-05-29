import {
  Head,
  Layout,
  Heading,
  HeadingDescription,
  Container,
  GridSplit,
  RentalSection,
} from "@/components/layout";

import loadData from "@/lib/loadData";
import { BASE_URL, RENTALS_PATH, RENTAL_SEO_PATH } from "@/constants/api";

const url = BASE_URL + RENTALS_PATH;
const urlSeo = BASE_URL + RENTAL_SEO_PATH;

export default function Rentals(props) {
  const data = props.seo.attributes;
  return (
    <Layout>
      <Head title={data.head_title} description={data.head_description} />
      <Heading>{data.head_title}</Heading>
      <HeadingDescription>{data.head_description}</HeadingDescription>
      <Container>
        <GridSplit>
          {props.items.map((item) => {
            const rental = item.attributes;
            return (
              <RentalSection
                key={item.id}
                image={rental.image_url}
                title={rental.name}
                description={rental.description}
                pricingStart={rental.pricing_from_label}
                currency={rental.currency}
                pricingEnd={rental.details}
                price={rental.price}
                btnName={rental.button_name}
                btnLink=""
              />
            );
          })}
        </GridSplit>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const items = await loadData(url);
  const seo = await loadData(urlSeo);

  return {
    props: { items, seo },
  };
}
