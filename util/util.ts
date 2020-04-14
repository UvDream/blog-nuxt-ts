/*
 * @Author: wangzhongjie
 * @Date: 2020-04-14 13:57:46
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-14 14:32:41
 * @Description:
 * @Email: UvDream@163.com
 */
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
