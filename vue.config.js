const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'dist',
  runtimeCompiler: true,
  // 配置路径别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@/components', resolve('src/components/'))
      .set('api', resolve('src/api/index.js'))
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境修改配置...
    } else {
      // 开发环境修改配置...
    }
  },
  // 全局注入通用样式
  css: {
    loaderOptions: {

    }
  },
  devServer: { // 环境配置
    host: '0.0.0.0',
    port: 8080,
    open: false, // 配置自动启动浏览器
    hotOnly: true, // 热更新
    proxy: { // 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
      '/api': {
        target: 'https://cnodejs.org',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api' // 重写接口
        }
      }
    }
  }
}

// module.exports = {
//   baseUrl: '/', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
//   outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
//   assetsDir: '', // 放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
//   indexPath: 'index.html', // 指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
//   pages: { // pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
//     index: { // 除了 entry 之外都是可选的
//       entry: 'src/index/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
//       template: 'public/index.html', // 模板来源
//       filename: 'index.html', // 在 dist/index.html 的输出
//       title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
//       chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
//     },
//     subpage: 'src/subpage/main.js' // 官方解释：当使用只有入口的字符串格式时,模板会被推导为'public/subpage.html',若找不到就回退到'public/index.html',输出文件名会被推导为'subpage.html'
//   },
//   lintOnSave: true, // 是否在保存的时候检查
//   productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
//   css: {
//     extract: true, // 是否使用css分离插件 ExtractTextPlugin
//     sourceMap: false, // 开启 CSS source maps
//     loaderOptions: {}, // css预设器配置项
//     modules: false // 启用 CSS modules for all css / pre-processor files.
//   },
//   devServer: { // 环境配置
//     host: 'localhost',
//     port: 8080,
//     https: false,
//     hotOnly: false,
//     open: true, // 配置自动启动浏览器
//     proxy: { // 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
//       '/api': {
//         target: '<url>',
//         ws: true,
//         changeOrigin: true
//       },
//       '/foo': {
//         target: '<other_url>'
//       }
//     }
//   },
//   pluginOptions: { // 第三方插件配置
//     // ...
//   }
// }
