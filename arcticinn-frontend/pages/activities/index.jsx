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
import {
  BASE_URL,
  ACTIVITIES_PATH,
  ACTIVITIES_SEO_PATH,
} from "@/constants/api";

const url = BASE_URL + ACTIVITIES_PATH;
const urlSeo = BASE_URL + ACTIVITIES_SEO_PATH;

export default function Activities(props) {
  const data = props.seo.attributes;
  return (
    <Layout>
      <Head title={data.head_title} description={data.head_description} />
      <Heading>{data.head_title}</Heading>
      <HeadingDescription>{data.head_description}</HeadingDescription>
      <Container>
        <GridSplit>
          {props.items.map((item) => {
            const activity = item.attributes;
            return (
              <ArticleSection
                key={item.id}
                image={activity.header_image_url}
                title={activity.title}
                description={activity.summary}
                btnName="Read more"
                href={`activities/${item.id}`}
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
