/*
 * @Author: wangzhongjie
 * @Date: 2020-04-14 13:57:46
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-14 09:59:42
 * @Description:
 * @Email: UvDream@163.com
 */
import { lightTheme, darkTheme } from "./var-theme";
import cssVars from "css-vars-ponyfill";
/**
 * 动态插入css
 */

export const loadStyle = (url: any) => {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(link);
};
/**
 * 切换主题
 */
export const changeTheme = (theme: boolean) => {
  document.documentElement.setAttribute("data-theme", theme ? "light" : "dark");
  cssVars({
    watch: true, // 当添加，删除或修改其<link>或<style>元素的禁用或href属性时，ponyfill将自行调用
    variables: theme ? lightTheme : darkTheme, // variables 自定义属性名/值对的集合
    onlyLegacy: false // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
  });
};

/*
 *百度收录
 */
export const bdSearch = () => {
  (function() {
    var bp = document.createElement("script");
    var curProtocol = window.location.protocol.split(":")[0];
    if (curProtocol === "https") {
      bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
    } else {
      bp.src = "http://push.zhanzhang.baidu.com/push.js";
    }
    let s: any = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
  })();
};
