'use strict'
/*function route(pathname,handle){
    if(typeof handle[pathname] === 'function'){
        return handle[pathname]();
    }else{
        console.log("no request handler found for" + pathname);
        return "404 not found";
    }
}*/
function route(pathname,handle,response){
    if(typeof handle[pathname] === 'function'){
        return handle[pathname](response);
    }else{
        console.log("no request handler found for" + pathname);
        response.writeHead(404,{"Content-type":"text/plain"});
        response.write("404 not found");
        response.end();
    }
}
module.exports.route = route;