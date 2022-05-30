import {
  Head,
  Layout,
  HeroArticle,
  Container,
  ArticleDescription,
  ArticleText,
} from "@/components/layout";
import { Button } from "@/components/common";

import axios from "axios";

import { BASE_URL, ACTIVITIES_PATH } from "@/constants/api";

const url = BASE_URL + ACTIVITIES_PATH;

export default function Activity({ detail }) {
  return (
    <Layout>
      <Head title={detail.title} description={detail.summary} />
      <HeroArticle
        heading={detail.title}
        backgroundImage={`url('${detail.header_image_url}')`}
        imageSource={`Source: ${detail.header_image_source}`}
      />
      <Container>
        <ArticleDescription>{detail.summary}</ArticleDescription>
        <ArticleText>{detail.text}</ArticleText>
        <Button href={detail.link} variant="primary" mt={3} mb={2}>
          {detail.button_name}
        </Button>
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

  let detail = null;

  try {
    const res = await axios.get(paramsUrl);
    detail = res.data.data.attributes;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { detail },
  };
}
