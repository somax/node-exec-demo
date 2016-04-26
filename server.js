var http = require('http');
var url =  require('url');
var exec = require('exec');

var server = http.createServer(function (req,res) {
	console.log(req.url);

	var _url = url.parse(req.url,true);
	var _pathname = _url.pathname;
	var _cmd = _url.query.cmd;
	console.log(_url);

	if(_pathname === '/exec'){
		exec(_cmd,function (err,out,code) {

			if (err instanceof Error){
			    throw err;				
			}
			  // process.stderr.write(err);
			  // process.stdout.write(out);
			  // process.exit(code);

			res.write('ERROR  : \n'+err+'\n');
			res.write('OUTPUT : '+out+'\n');
			res.write('CODE   : '+code+'\n');
			res.end  ('ALL DONE!'+'\n');

		});
	}

	res.write('CMD    : '+_cmd+'\n');
});


server.listen(9080);