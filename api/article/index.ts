/*
 * @Author: wangzhongjie
 * @Date: 2020-04-15 20:33:43
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-28 15:44:39
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
  },
  view: (params: object) => {
    return request({
      url: "/other/viewCount",
      method: "GET",
      params
    });
  },
  count: (params: Object) => {
    return request({
      url: "/article/view",
      method: "GET",
      params
    });
  }
};
export default Article;
