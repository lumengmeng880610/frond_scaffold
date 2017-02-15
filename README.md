# 前端与后端协作脚手架

# 功能
- css样式文件的热加载
- html、js文件修改触发浏览器页面自动刷新
- 后台api中间层

# 安装
需要node.js和npm支持
    下载项目  
    项目下执行 npm install 

# 使用
    Usage:
      npm start [--mock]

    Options:
      --mock       启动mock api服务

npm start --mock  
输入http://127.0.0.1:3000访问

# 文件结构目录
    app               前端文件
    app/css           css存放路径
    app/js            js存放路径
    test/mock-api     mock api路径
    index.js          项目启动文件
    README.md         
    package.json


# 后台api中间层
通过修改index.js文件
    // 后台api
    proxy: 
    process.env.npm_config_mock ? 
      // mock api
      'http://localhost:7000' : 
      // 后台api地址修改
      'http://localhost:9000',

# mock api
[mock-api-server](https://github.com/maitria/mock-api-server)  
当后台还没完成接口的时候，应该使用mock来模拟后台接口进行开发

# 部署
把最后生成的文件（app里面的所有）上传到服务器。然后用nginx进行后台接口和静态文件
的映射
