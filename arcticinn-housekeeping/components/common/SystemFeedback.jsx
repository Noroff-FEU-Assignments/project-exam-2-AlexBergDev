import { Alert, AlertIcon, useBreakpointValue } from "@chakra-ui/react";

export default function SystemFeedback({ children, status, ...props }) {
  return (
    <Alert
      mt={useBreakpointValue({ base: 12, md: 8 })}
      rounded={5}
      status={status}
      {...props}
    >
      <AlertIcon />
      {children}
    </Alert>
  );
}
