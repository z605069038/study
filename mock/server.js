'use strict';

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');
    var c = require('child_process');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || './build');

console.log('Static root dir: ' + root);
console.log(__dirname);

// 创建服务器:
var server = http.createServer(function (request, response) {
    //文件头
    var mineTypeMap={
        html:'text/html;charset=utf-8',
        htm:'text/html;charset=utf-8',
        xml:"text/xml;charset=utf-8",
        png:"image/png",
        jpg:"image/jpeg",
        jpeg:"image/jpeg",
        gif:"image/gif",
        css:"text/css;charset=utf-8",
        txt:"text/plain;charset=utf-8",
        mp3:"audio/mpeg",
        mp4:"video/mp4",
        ico:"image/x-icon",
        tif:"image/tiff",
        svg:"image/svg+xml",
        zip:"application/zip",
        ttf:"font/ttf",
        woff:"font/woff",
        woff2:"font/woff2",
    }
    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;

    var extname = path.extname(pathname).substr(1);
    if (mineTypeMap[extname]) {
        response.setHeader('Content-Type', mineTypeMap[extname] || 'text/plain;charset=utf-8');
    }else{
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    }

    //设置cookie
    if(extname == 'html'){
        response.setHeader('Set-Cookie','loginUser=%7B%22email%22%3A%22wb.zhangyao02%40mesg.corp.netease.com%22%2C%22id%22%3A30%2C%22name%22%3A%22%E7%AB%A0%E5%9E%9A%22%2C%22roles%22%3A%5B%7B%22createTime%22%3A1471931807000%2C%22id%22%3A3%2C%22name%22%3A%22ROLE_SUPER_ADMIN%22%2C%22operation%22%3A%22ROLE_SUPER_ADMIN%22%2C%22updateTime%22%3A1471931810000%7D%5D%2C%22userStatus%22%3A%22NORMAL%22%2C%22workId%22%3A%22LS02368%22%7D; JSESSIONID=6CE0EE2555D9BB4F45BDD6E5E2846480-test');
    }

    //设置mock,需要带do后缀
    if(extname == 'do'){
        var filepath = path.join(__dirname,'mock', pathname);
    }else{
        var filepath = path.join(root, pathname);
    }
    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/index.html#/assign/list?type=0');

c.exec('start http://127.0.0.1:8080/index.html');