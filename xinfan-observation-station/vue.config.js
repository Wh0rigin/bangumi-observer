const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // defineConfig({
  //   transpileDependencies: true
  // }),
  devServer: {
    proxy: {
      '/calendar': {
        target: 'https://api.bgm.tv',
        changeOrigin: true,
        pathRewrite: {
          '^/calendar': '/calendar'
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      fallback: {
        timers: require.resolve('timers-browserify')
      }
    }
  }
}
