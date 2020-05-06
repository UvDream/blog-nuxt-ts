/*
 * @Author: wangzhongjie
 * @Date: 2020-04-14 13:57:46
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-06 11:13:07
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
/**
 * 切换主题
 */
export const changeTheme = (id: number) => {
  if (id == 1) {
    // 默认主题
    document.body.style.setProperty("--bgColor", "#fff");
    document.body.style.setProperty("--textColor", "#000");
    document.body.style.setProperty("--grayBgColor", "#f5f5f5");
    document.body.style.setProperty("--borderColor", "#fff");
  } else if (id == 2) {
    // 暗黑
    document.body.style.setProperty("--bgColor", "#000");
    document.body.style.setProperty("--textColor", "#fff");
    document.body.style.setProperty("--grayBgColor", "#000");
    document.body.style.setProperty("--borderColor", "#544d4d");
  }
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
