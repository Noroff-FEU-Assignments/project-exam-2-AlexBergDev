import NextHead from "next/head";
import PropTypes from "prop-types";

export default function Head({ title, description }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}Arctic Inn
      </title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#000000" />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
