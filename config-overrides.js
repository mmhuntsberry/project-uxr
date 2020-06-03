const PrerenderSPAPlugin = require("prerender-spa-plugin");
const path = require("path");

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "build"),
        routes: ["/", "/faq/"]
      })
    ]
  }
};
