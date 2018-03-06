'use strict'
var exec = require('child_process').exec;
function start(response){
    console.log('requset handler "start" was called!');
    // sleep(10000);
    // return "hello start!";
    /*exec('ls -lah',function(error,stdout,stderr){
        response.writeHead(200,{"Content-type":"text/plain"});
        response.write(stdout);
        response.end();
    });*/
    var body = '<html><head><meta http-equiv="content-type" content="text/html" charset="utf-8"</head>';
    body +='<body><form action="/upload" method="post"><textarea name="text" rows="20" cols="60"></textarea>';
    body +='<input type="submit" value="Submit text"/></form></body></html>';
    response.writeHead(200,{"Content-type":"text/html"});
    response.write(body);
    response.end();
}

function update(response){
    response.writeHead(200,{"Content-type":"text/plain"});
        response.write("hello update!");
        response.end();
}

function sleep(milliSeconds){
    var startTime = new Date().getTime();
    while(new Date().getTime() < startTime + milliSeconds);
}

module.exports = {
    start:start,
    update:update
};