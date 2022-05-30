import {
  Head,
  Layout,
  Heading,
  HeadingDescription,
  SubHeading,
  CTARight,
  Container,
  BlogGrid,
  BlogCard,
  Gallery,
} from "@/components/layout";

import loadData from "@/lib/loadData";
import { BASE_URL, CAMPING_PATH, POSTS_RECENT_PATH } from "@/constants/api";

const url = BASE_URL + CAMPING_PATH;
const recentUrl = BASE_URL + POSTS_RECENT_PATH;

export default function Camping(props) {
  const data = props.items.attributes;

  return (
    <Layout>
      <Head title={data.head_title} description={data.head_description} />
      <Heading>{data.head_title}</Heading>
      <HeadingDescription>{data.head_description}</HeadingDescription>
      <CTARight
        picture="/assets/images/hero/hero-camping.jpg"
        subHeading={data.name}
        description={data.description}
        pricingStart="From"
        currency={data.currency}
        price={data.price}
        pricingEnd={data.details}
        btnName={data.button_name}
        btnLink=""
      />
      <Gallery />
      <Container>
        <SubHeading mt={16} mb={10}>
          Explore recent posts
        </SubHeading>
        <BlogGrid>
          {props.recent.map((item) => {
            const post = item.attributes;
            return (
              <BlogCard
                key={item.id}
                image={post.header_image_url}
                title={post.title}
                description={post.summary}
                button="Read more"
                variant="primary"
                href={`blog/${item.id}`}
              />
            );
          })}
        </BlogGrid>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const items = await loadData(url);
  const recent = await loadData(recentUrl);

  return {
    props: { items, recent },
  };
}
