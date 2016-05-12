var path = require('path');
var express = require('express');
var webpack = require('webpack');
var url = require('url');
var open = require('open');
var proxyMiddleware = require('proxy-middleware');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotLoaderMiddleware= require('webpack-hot-middleware');
var config = require('./webpack.config');


// 创建一个express 服务,用于host web应用
var app = express();

// 使用webpack.config文件作为启动服务和热发布配置
var compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotLoaderMiddleware(compiler));

// 对 localhost:4000/api 的请求进行反向代理
var proxyOptions = url.parse('http://api.tuicool.com/api');
app.use('/api', proxyMiddleware(proxyOptions));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(4000, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:4000');
  open('http://localhost:4000');
});
