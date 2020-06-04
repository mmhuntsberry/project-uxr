const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
module.exports = withSass(
  withImages({
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        "/": { page: "/" },
        "/faq/index.html": { page: "/faq" },
      };
    },
  })
);
