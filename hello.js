var express = require('express');

var http = require('http'), // 引入需要的模块
  fs = require('fs'), //引入文件读取模块
  cp = require('child_process'), // 可自动打开浏览器模块
  url = require('url'),
  path = require('path');
var app = express();

const data = {
  name: 'hello world',
  desc: '描述内容',
  date: new Date()
};

app.get('/', function(req, res) {
  res.send('hello world123');
});

app.listen(3000, function() {
  console.log('server is running');
});

cp.exec('start http://127.0.0.1:3000/');
