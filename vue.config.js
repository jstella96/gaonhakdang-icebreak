module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  runtimeCompiler: true,
  productionSourceMap: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/standardword': {
        target: 'http://192.168.0.246:3012/standardword/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/standardword': '',
        },
      },
    },
  },
  publicPath: '/gaonhakdang-icebreak',
  outputDir: 'docs'
};