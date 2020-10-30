/*
 * @Descripttion: 本地内置路由
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-03 11:32:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-10-28 16:02:19
 */ 
let routerArray = [
  {
    type: "redirect",
    from: "/",
    path: "/home",
    exact: true,
  },
  {
    name: "Home",
    path: "/home",
    exact: true
  },
  {
    name: "About",
    path: "/about",
    exact: true // 开启严格匹配模式
  },
  {
    name: "Detail",
    path: "/detail",
    exact: true // 开启严格匹配模式
  },
  {
    name: "NotFound",
    path: "/404",
    exact: false
  },
  {
    type: "redirect",
    path: "/404"
  }
]

export default routerArray