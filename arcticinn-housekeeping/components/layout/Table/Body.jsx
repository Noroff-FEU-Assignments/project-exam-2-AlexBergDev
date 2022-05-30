import { Table, Tbody, TableContainer } from "@chakra-ui/react";

export default function TableBody({ children, ...props }) {
  return (
    <TableContainer whiteSpace="normal" isTruncated {...props}>
      <Table variant="simple">
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
}
