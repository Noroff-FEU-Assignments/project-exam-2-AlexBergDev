import {
  Head,
  Layout,
  Carousel,
  HomeGrid,
  HomeHero,
  Container,
  SubHeading,
  BlogGrid,
  BlogCard,
} from "@/components/layout";
import loadData from "@/lib/loadData";
import { BASE_URL, POSTS_RECENT_PATH, HOME_PATH } from "@/constants/api";

const url = BASE_URL + POSTS_RECENT_PATH;
const urlSeo = BASE_URL + HOME_PATH;

export default function Home(props) {
  const data = props.seo.attributes;
  return (
    <Layout>
      <Head title="" description={data.head_description} />
      <Carousel />
      <HomeGrid>
        <HomeHero
          backgroundImage="/assets/images/hero/hero-hotel.jpg"
          heading="Suites & Cabins"
          href="/hotel"
        />
        <HomeHero
          backgroundImage="/assets/images/hero/hero-camping.jpg"
          heading="Camping"
          href="/camping"
        />
        <HomeHero
          backgroundImage="/assets/images/events/planning.jpg"
          heading="Events"
          href="/events"
        />
      </HomeGrid>

      <Container>
        <SubHeading mt={16} mb={10}>
          Explore recent posts
        </SubHeading>
        <BlogGrid>
          {props.items.map((item) => {
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
  const seo = await loadData(urlSeo);

  return {
    props: { items, seo },
  };
}
