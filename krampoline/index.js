var os = require('os');



var http = require('http');

var handleRequest = function(request, response) {

  response.writeHead(200);

  var r = ""
      r += "Hello World! I'm User server "+os.hostname() +" \n";
      r += "configmap : " + process.env.HTTP_SVC;
  response.end("Hello World! I'm User server "+os.hostname() +" \n");



  //log

  console.log("["+

		Date(Date.now()).toLocaleString()+

		"] "+os.hostname() +  " - " + process.env.HTTP_SVC );

}

var www = http.createServer(handleRequest);

www.listen(3000);
console.log( "process.env.http_svc = " + process.env.http_svc );
console.log( "httpServer Started - Listen : port " + 3000 );
