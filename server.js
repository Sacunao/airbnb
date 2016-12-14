var express = require("express");
var app = express();

app.use(express.static(__dirname+ "/public"));

app.set('port', (process.env.PORT || 3000));

app.listen(3000,function(){
	console.log("server encendido");
});
