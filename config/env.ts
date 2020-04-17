/*
 * @Author: wangzhongjie
 * @Date: 2020-04-14 13:56:51
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-17 14:03:13
 * @Description:配置文件
 * @Email: UvDream@163.com
 */
let iconfontVersion = ["1753589_lp9rqr3u89"];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
let baseUrl = "",
  imgUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = `http://127.0.0.1:8000`; //开发环境地址
  imgUrl = `http://localhost:3001`;
} else if (process.env.NODE_ENV == "production") {
  baseUrl = `http://118.25.110.93:8000`; //生产环境地址
  imgUrl = `http://118.25.110.93`;
}
export { iconfontUrl, iconfontVersion, baseUrl, imgUrl };
