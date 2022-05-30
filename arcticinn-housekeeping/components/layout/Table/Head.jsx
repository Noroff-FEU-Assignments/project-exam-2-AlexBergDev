import { Flex, Text } from "@chakra-ui/react";

import PropTypes from "prop-types";

import { Box } from "@/components/layout";
import { Button } from "@/components/common";

export default function TableHead({ count, plural, singular, href, ...props }) {
  return (
    <Box mb={5} py={3}>
      <Flex
        fontWeight={500}
        justifyContent="space-between"
        alignContent="center"
        mx="auto"
      >
        <Text pt={2}>
          {count} {plural}
        </Text>
        <Button href={href} variant="invisible">
          Create new {singular}
        </Button>
      </Flex>
    </Box>
  );
}

TableHead.propTypes = {
  count: PropTypes.number,
  plural: PropTypes.string,
  singular: PropTypes.string,
  href: PropTypes.string,
};
