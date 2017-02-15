var argv = require('yargs').argv;

// 模拟api服务，前后端协作开发时可删除
if (argv.mock) {
  require('./lib/mock_api');
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
    'http://localhost:7000' : 
    // 后台api地址修改
    'http://localhost:9000',
  serveStatic: [ 'app' ]
});

