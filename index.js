var argv = require('yargs').argv;

var mockPort = 7000;

// 模拟api服务
if (argv.mock) {
  //require('./lib/mock_api');
  require('child_process')
    .exec(__dirname + '/node_modules/.bin/mock-api-server --port ' + mockPort, function(err, stdout, stderr) {
      if (err) console.error(err);
    });
}


var bs = require('browser-sync').create();

bs.init({
  open: false,
  // 监听文件修改
  files: [
    'app/**/*.css',
    'app/**/*.js',
    'app/**/*.html'
  ],
  // 后台api地址
  proxy: 
    argv.mock ? 
    // mock api
    'http://localhost:' + mockPort : 
    // 后台api地址修改
    'http://localhost:9000',
  serveStatic: [ 'app' ]
});

