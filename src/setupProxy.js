const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://jb95qkw1hh.execute-api.ap-northeast-2.amazonaws.com', // 서버 URL 설정
            changeOrigin: true,
        }),
    );
};
