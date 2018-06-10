# webpack-demo
## 配置webpack4打包typescript+scss
目录结构来自vue-cli

    目录结构
    
    build/  【打包相关的文件】
        build.js  【npm run build执行的文件】
        webpack.base.config.js  【开发环境和线上环境 webpack配置文件的公共部分】
        dev.config.js  【开发环境独特的webpack配置部分】
        build.config.js  【线上环境独特的webpack配置部分】
    config/  【简单的数据配置】
        index.js  【给webpack提供数据的文件】
    src/
        index.ts  【typescript测试文件】
        index.scss  【scss测试文件】
        img/  【图片文件夹】
            cd.jpg  【测试图片】
    static/ 【静态资源文件】
    
    .babelrc  【babel配置文件】
    index.html  【基础html文件】
    package.json  【npm包配置文件】
    tsconfig.json  【typescript配置文件】

## 文档
[DOCS](http://itagn.xyz/#docs/Webpack4)

作者：微博 [@itagn][1] - Github [@itagn][2]

[1]: https://weibo.com/p/1005053782707172
[2]: https://github.com/itagn