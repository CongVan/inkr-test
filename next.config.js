/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");
const path = require("path");

const lessVariable = path.resolve("./styles/variables.less");
const nextConfig = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
      additionalData: (content) => `${content}\n\n@import '${lessVariable}';`,
    },
  },
});

module.exports = nextConfig;
