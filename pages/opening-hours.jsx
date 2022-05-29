import {
  Head,
  Layout,
  Heading,
  HeadingDescription,
  CTALeft,
  CTARight,
} from "@/components/layout";

import loadData from "@/lib/loadData";
import { BASE_URL, OPENING_HOUR_PATH } from "@/constants/api";

const url = BASE_URL + OPENING_HOUR_PATH;

export default function OpeningHours(props) {
  const data = props.items.attributes;

  return (
    <Layout>
      <Head title={data.head_title} description={data.head_description} />
      <Heading>{data.head_title}</Heading>
      <HeadingDescription>{data.head_description}</HeadingDescription>
      <CTARight
        picture={data.reception_image_url}
        subHeading={data.reception_name}
        description={data.reception_description}
        pricingStart=""
        currency={data.reception_time}
        price=""
        pricingEnd={data.reception_details}
        btnName={data.reception_button_name}
        btnLink={data.reception_link}
      />
      <CTALeft
        picture={data.breakfast_image_url}
        subHeading={data.breakfast_name}
        description={data.breakfast_description}
        pricingStart=""
        currency={data.breakfast_time}
        price=""
        pricingEnd={data.breakfast_details}
        btnName={data.breakfast_button_name}
        btnLink={data.breakfast_link}
      />
      <CTARight
        picture={data.dinner_image_url}
        subHeading={data.dinner_name}
        description={data.dinner_description}
        pricingStart=""
        currency={data.dinner_time}
        price=""
        pricingEnd={data.dinner_details}
        btnName={data.dinner_button_name}
        btnLink={data.dinner_link}
      />
      <CTALeft
        picture={data.room_service_image_url}
        subHeading={data.room_service_name}
        description={data.room_service_description}
        pricingStart=""
        currency={data.room_service_time}
        price=""
        pricingEnd={data.room_service_details}
        btnName={data.room_service_button_name}
        btnLink={data.room_service_link}
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
