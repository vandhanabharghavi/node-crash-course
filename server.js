const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    // set header content type
    res.setHeader('Content-Type','text/html');
    
    //send html file
    fs.readFile('./views/index.html',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(data);
            res.end();
        }
    })
    
    
    
    
    
    //writing content to browser
    // res.write('<head><link rel="stylesheet" href="#</head>');
    // res.write('<p>hello, vandhana!</p>')
    // res.write('<p>hello again, vandhana!</p>')
    // //ending it for the browser
    // res.end();
});

server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 30000')
});
