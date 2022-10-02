const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  publicPath: "/Gitogram/dist/",
};

module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
  },
};
