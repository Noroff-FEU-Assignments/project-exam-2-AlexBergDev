import {
  Head,
  Layout,
  Heading,
  HeadingDescription,
  CTALeft,
  CTARight,
} from "@/components/layout";

import loadData from "@/lib/loadData";
import { BASE_URL, EVENT_PATH } from "@/constants/api";

const url = BASE_URL + EVENT_PATH;

export default function Location(props) {
  const data = props.items.attributes;

  return (
    <Layout>
      <Head title={data.head_title} description={data.head_description} />
      <Heading>{data.head_title}</Heading>
      <HeadingDescription>{data.head_description}</HeadingDescription>
      <CTARight
        picture="/assets/images/events/hero.jpg"
        subHeading={data.restaurant_name}
        description={data.restaurant_description}
        pricingStart={data.pricing_from_label}
        currency={data.restaurant_currency}
        price={data.restaurant_price}
        pricingEnd={data.restaurant_details}
        btnName={data.restaurant_button_name}
        btnLink={data.restaurant_link}
      />
      <CTALeft
        picture="/assets/images/events/planning.jpg"
        subHeading={data.cafe_name}
        description={data.cafe_description}
        pricingStart={data.pricing_from_label}
        currency={data.cafe_currency}
        price={data.cafe_price}
        pricingEnd={data.cafe_details}
        btnName={data.cafe_button_name}
        btnLink={data.cafe_link}
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
