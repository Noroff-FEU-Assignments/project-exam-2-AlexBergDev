import {
  Head,
  Layout,
  Heading,
  HeadingDescription,
  CTALeft,
  CTARight,
} from "@/components/layout";

import loadData from "@/lib/loadData";
import { BASE_URL, ACCOMMODATION_PATH } from "@/constants/api";

const url = BASE_URL + ACCOMMODATION_PATH;

export default function Hotel(props) {
  const data = props.items.attributes;
  return (
    <Layout>
      <Head title={data.head_title} description={data.head_description} />
      <Heading>{data.head_title}</Heading>
      <HeadingDescription>{data.head_description}</HeadingDescription>
      <CTARight
        picture={data.hotel_image_url}
        subHeading={data.hotel_name}
        description={data.hotel_description}
        pricingStart={data.pricing_from_label}
        currency={data.hotel_currency}
        price={data.hotel_price}
        pricingEnd={data.hotel_details}
        btnName={data.hotel_button_name}
        btnLink={data.hotel_link}
      />
      <CTALeft
        picture={data.cabin_image_url}
        subHeading={data.cabin_name}
        description={data.cabin_description}
        pricingStart={data.pricing_from_label}
        currency={data.cabin_currency}
        price={data.cabin_price}
        pricingEnd={data.cabin_details}
        btnName={data.cabin_button_name}
        btnLink=""
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const items = await loadData(url);

  return {
    props: { items },
  };
}
