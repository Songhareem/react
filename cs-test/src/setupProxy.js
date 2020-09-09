
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: 'http://localhost:3001/', // 서버 주소를 여기서 변경
          changeOrigin: true
      })
  )
};