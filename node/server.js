'use strict'
var http = require('http');
var url = require('url');
/*function start(route,handle){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("request for "+pathname+" received");
        var content = route(pathname,handle);
        response.writeHead(200,{"Content-type":"text/plain"});
        response.write(content);
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started!");
}*/
function start(route,handle){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("request for "+pathname+" received");
        route(pathname,handle,response);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started!");
}
module.exports ={
    start:start
}