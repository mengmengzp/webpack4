# webpack4+vue2项目工程
# 一、项目目录结构说明
```
build -- webpack配置相关
    webpack.config.base.js webpack共同配置
    webpack.config.dev.js  客户端配置

src -- 客户端入口
    assets：静态资源
    layout：页面公共布局（头部、底部等）
    views： 页面
    utils：公共方法封装，比如axios封装ajax请求
    index.js 入口

dist -- 项目打包
mock --  自测模拟请求数据
node_modules -- 项目依赖
.babelrc -- 编译es5以上语法
.editorconfig -- IDE配置
.eslintrc -- 代码风格检查配置文件
.gitignore --  git忽略文件配置
package.json -- 项目依赖包
Package-lock.json -- 依赖包锁定版本
postcss.config.js -- 对编译后的css后处理，自动增加浏览器前缀
README -- 项目文档说明
```
# 二、项目安装、启动相关说明

```
1、依赖安装
进入项目目录，执行npm install

2、启动
npm run dev

3、打包
npm run build

4、代码风格自动修复
npm run lint-fix

```

# 新增页面流程
```
1）在views增加新增页面文件目录，创建vue文件和api.js（当前vue文件的请求api管理）

2）接口请求参考demo实例

3）自测数据参考mock目录
mock规范参考 mock中的index.js注释说明
说明：mock使用了webpack-api-mocker，它是一个webpack-dev-server中间件，可以为REST API创建模拟，与Webpack 配合使用，只有一个 server即可

通过DevSever的before函数进行注入
```
