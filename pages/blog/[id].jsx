import {
  Head,
  SubHeading,
  Layout,
  HeroArticle,
  Container,
  ArticleDescription,
  ArticleText,
  BlogGrid,
  BlogCard,
} from "@/components/layout";

import loadData from "@/lib/loadData";
import axios from "axios";

import { BASE_URL, POSTS_PATH, POSTS_RECENT_PATH } from "@/constants/api";

const url = BASE_URL + POSTS_PATH;
const recentUrl = BASE_URL + POSTS_RECENT_PATH;

export default function Article({ detail, recent }) {
  return (
    <Layout>
      <Head title={detail.title} description={detail.summary} />
      <HeroArticle
        heading={detail.title}
        backgroundImage={`url('${detail.header_image_url}')`}
        imageSource=""
      />
      <Container>
        <ArticleDescription>{detail.summary}</ArticleDescription>
        <ArticleText>{detail.text}</ArticleText>
        <SubHeading mt={16} mb={10}>
          More posts
        </SubHeading>
        <BlogGrid>
          {recent.map((item) => {
            const post = item.attributes;
            return (
              <BlogCard
                key={item.id}
                image={post.header_image_url}
                title={post.title}
                description={post.summary}
                button="Read more"
                variant="primary"
                href={`${item.id}`}
              />
            );
          })}
        </BlogGrid>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await axios.get(url);
    const details = res.data.data;

    const paths = details.map((detail) => ({
      params: { id: detail.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const paramsUrl = url + `/${params.id}`;
  const recent = await loadData(recentUrl);

  let detail = null;

  try {
    const res = await axios.get(paramsUrl);
    detail = res.data.data.attributes;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { detail, recent },
  };
}
