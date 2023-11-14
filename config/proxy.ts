export default {
  dev: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // 重写路径，去掉 '/api' 前缀
      },
    },
  },
  pre: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // 重写路径，去掉 '/api' 前缀
      },
    },
  },
};
