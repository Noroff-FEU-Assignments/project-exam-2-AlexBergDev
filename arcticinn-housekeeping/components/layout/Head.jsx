import NextHead from "next/head";
import PropTypes from "prop-types";

export default function Head({ children }) {
  return (
    <NextHead>
      <title>
        {children}
        {children ? " | " : ""}Housekeeping
      </title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta property="og:title" content={children} key="title" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#000000" />
    </NextHead>
  );
}

Head.propTypes = {
  children: PropTypes.string.isRequired,
};
