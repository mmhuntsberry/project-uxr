const PrerenderSPAPlugin = require("prerender-spa-plugin");
const path = require("path");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = (config, env) => {
  if (env === "production") {
    config.plugins = config.plugins.concat([
      new PrerenderSPAPlugin({
        routes: ["/index.html", "/faq/index.html"],
        staticDir: path.join(__dirname, "build"),
        // Workaround for async
        renderer: new Renderer({
          renderAfterDocumentEvent: "render-event"
        }),
        headless: true
      })
    ]);
  }

  return config;
};
