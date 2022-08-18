/*
 * @Author: zhouliujun
 * @Date: 2022-08-18 10:58:17
 * @LastEditTime: 2022-08-18 10:58:55
 * @LastEditors: zhouliujun
 * @Description: file content
 * @FilePath: \vue-hiprint\vue.config.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// vue.config.js
module.exports = {
  // 将 examples 目录添加为新的页面
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/vue-hiprint" : "/"
}
