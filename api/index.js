const { createProxyMiddleware } = require("http-proxy-middleware");

const apiProxy = createProxyMiddleware({
  target: "https://api.websitecarbon.com/",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "",
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  },
});

export default function (req, res) {
  return apiProxy(req, res);
}
