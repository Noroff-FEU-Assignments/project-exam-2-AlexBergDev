import {
  Head,
  Layout,
  Heading,
  HeadingDescription,
  Container,
  GridSplit,
  ArticleSection,
} from "@/components/layout";
import loadData from "@/lib/loadData";
import { BASE_URL, POSTS_PATH, BLOG_SEO_PATH } from "@/constants/api";

const url = BASE_URL + POSTS_PATH;
const urlSeo = BASE_URL + BLOG_SEO_PATH;

export default function Blog(props) {
  const data = props.seo.attributes;
  return (
    <Layout>
      <Head title={data.head_title} description={data.head_description} />
      <Heading>{data.head_title}</Heading>
      <HeadingDescription>{data.head_description}</HeadingDescription>
      <Container>
        <GridSplit>
          {props.items.map((item) => {
            const post = item.attributes;
            return (
              <ArticleSection
                key={item.id}
                image={post.header_image_url}
                title={post.title}
                description={post.summary}
                btnName="Read more"
                href={`blog/${item.id}`}
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
