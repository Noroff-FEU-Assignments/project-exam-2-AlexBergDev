import { Container } from "@chakra-ui/react";

export default function renderContainer({ children }) {
  return <Container maxW={"6xl"}>{children}</Container>;
}
