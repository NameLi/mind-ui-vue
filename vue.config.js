module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  publicPath: "/",
  lintOnSave: false,
  devServer: {
    open: true,
    port: 8108
  },
  chainWebpack: (config) => {
    config.module
      .rule("scss")
      .oneOf("vue")
      .use("px2rem")
      .loader("px2rem-loader")
      .before("postcss-loader")
      .options({
        remUnit: 75,
        remPrecision: 8,
      })
      .end()
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });
  },
  css: {
    extract: true,
    sourceMap: false,
    requireModuleExtension: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/variables.scss";`,
        sassOptions: { outputStyle: 'expanded' }
      },
    },
  },
};
