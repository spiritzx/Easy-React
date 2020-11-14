/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-14 21:58:22
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-14 22:19:31
 */

import http from "./http.js"

let getUserRouterFn = () => {
  return http.getRequest("/mock/route")
}

export {
  getUserRouterFn
}