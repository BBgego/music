module.exports = {
  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        changeOrigin: true,
        target: 'http://localhost:8000'  //代理接口

        // pathRewrite: {
        //   '^/api': '/mock'    //代理的路径
        // }
      }
    }
  }
}
