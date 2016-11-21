var http =require('http');
var server = http.createServer(function(req,res){
    console.log('req',req.headers);
    res.end('ok');
})

server.listen(3000);