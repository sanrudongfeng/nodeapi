var http =require('http');
var server = http.createServer(function(req,res){
    console.log('req',req);
    req.on('data',function(data){
        console.log('data',data);
    });
    res.end('ok');
})

server.listen(3000);