/*
 * @Author: wangzhongjie
 * @Date: 2020-04-15 20:33:43
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-15 20:59:47
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
  }
};
export default Article;
