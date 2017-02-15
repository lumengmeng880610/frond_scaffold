// 模拟api服务，前后端协作开发时可删除
if (process.env.npm_config_mock) {
  require('child_process').exec('./node_modules/.bin/mock-api-server --port 7000', function(err, stdout, stderr) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
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
    process.env.npm_config_mock ? 
    // mock api
    'http://localhost:7000' : 
    // 后台api地址修改
    'http://localhost:9000',
  serveStatic: [ 'app' ]
});

