const proxy = require("http-proxy-middleware");
module.exports = function(app) { 
  app.use(
    proxy('/api', {
      target: 'http://localhost:1234',
      changeOrigin:true,
      pathRewrite: {
        "^/api": "/" // 把/api 变成空
      }
    })
  );
  app.use(
    proxy('/test', {
      target: 'http://localhost:1234',
      changeOrigin:true,
      pathRewrite: {
        "^/test": "/" // 把/api 变成空
      }
    })
  );
}