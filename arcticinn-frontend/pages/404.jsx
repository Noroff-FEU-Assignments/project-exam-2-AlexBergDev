import {
  Head,
  Layout,
  Heading,
  HeadingDescription,
  Container,
  SubHeading,
  BlogGrid,
  BlogCard,
} from "@/components/layout";

export default function PageNotFound() {
  return (
    <Layout>
      <Head title="" description="" />
      <Heading>404 - Page not found</Heading>
      <HeadingDescription>
        Oops! Seems like this page does not exist. (Error Code 404)
      </HeadingDescription>
      <Container>
        <SubHeading mt={16} mb={10}>
          Explore recent posts
        </SubHeading>
        <BlogGrid>
          <BlogCard
            image="/assets/images/activities/activity4.jpg"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            button="Read more"
            variant="primary"
            href="/activities"
          />
          <BlogCard
            image="/assets/images/activities/activity3.jpg"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            button="Read more"
            variant="primary"
            href="/activities"
          />
          <BlogCard
            image="/assets/images/activities/activity1.jpg"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            button="Read more"
            variant="primary"
            href="/activities"
          />
        </BlogGrid>
      </Container>
    </Layout>
  );
}
