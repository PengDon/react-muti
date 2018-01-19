# 在master分支基础上进行以下改造

## 添加路由支持
~~~
  cnpm i react-router-dom --save
~~~

## 入口目录由models目录改为route目录
### 修改配置文件

1. 修改path.js中的appIndexJs变量,入口路径调整到route目录下的文件
2. 修改webpack.config.dev.js中的代码
3. 修改webpack.config.prod.js中的代码

### 修改src下的文件目录

1. 新增route目录
1. route目录下的文件夹名称对应生成的html文件名称
1. route.js 为主入口
1. page.js 为集中处理models模块引用

## 添加mock支持，用于模拟数据
~~~
  cnpm i mock --save-dev
~~~