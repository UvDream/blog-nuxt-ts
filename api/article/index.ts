/*
 * @Author: wangzhongjie
 * @Date: 2020-04-15 20:33:43
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-16 11:19:25
 * @Description:文章接口
 * @Email: UvDream@163.com
 */
import request from "../request";
const Article = {
  list: (data: object) => {
    return request({
      url: "/article/list",
      method: "POST",
      data
    });
  },
  detail: (params?: Object) => {
    return request({
      url: "/article/detail",
      method: "GET",
      params
    });
  }
};
export default Article;
