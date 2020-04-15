/*
 * @Author: wangzhongjie
 * @Date: 2020-04-14 15:06:52
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-15 20:42:58
 * @Description:axios配置
 * @Email: UvDream@163.com
 */

import { baseUrl } from "../config/env";
export default {
  method: "post",
  // 基础url前缀
  baseURL: baseUrl,
  // 请求头信息
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: "json"
};
