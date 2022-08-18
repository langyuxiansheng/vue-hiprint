/*
 * @Author: zhouliujun
 * @Date: 2022-08-18 10:58:17
 * @LastEditTime: 2022-08-18 11:01:42
 * @LastEditors: zhouliujun
 * @Description: file content
 * @FilePath: \vue-hiprint\packages\index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 导入单个组件
import VueHiPrint from './VueHiPrint';
SignCanvas.install = function (Vue) {
    Vue.component(VueHiPrint.name, VueHiPrint);
}
// 导出的对象必须具备一个 install 方法
export default VueHiPrint;
