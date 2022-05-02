const http = require("http");

const server = http.createServer((req, res)=>{
  if(req.url==='/'){
    res.end("Welcome to home page");
  }

  else if(req.url==='/about'){
    res.end("Welcome to about page");
  }
  else
    res.end(`<h1>Hello there is no page</h1>`);
});


server.listen(5000);
  

