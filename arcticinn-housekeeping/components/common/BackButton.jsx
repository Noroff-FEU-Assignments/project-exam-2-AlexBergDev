import { Button } from "@/components/common";
import { HiArrowSmLeft } from "react-icons/hi";

import PropTypes from "prop-types";

export default function BackButton({ href, children, ...props }) {
  return (
    <Button
      href={href}
      my={3}
      px={0}
      variant="invisible"
      leftIcon={<HiArrowSmLeft />}
      {...props}
    >
      {children}
    </Button>
  );
}

BackButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
};
