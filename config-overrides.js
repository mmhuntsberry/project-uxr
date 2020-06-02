const PrerenderSPAPlugin = require("prerender-spa-plugin");
const path = require("path");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = (config, env) => {
  if (env === "production") {
    config.plugins = config.plugins.concat([
      new PrerenderSPAPlugin({
        indexPath: path.join(__dirname, "build", "index.html"),
        routes: ["/", "/faq"],
        staticDir: path.join(__dirname, "build")
      })
    ]);
  }

  return config;
};
